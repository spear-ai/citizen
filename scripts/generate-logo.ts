import { writeFile } from "node:fs/promises";

type Point = readonly [number, number];
type Vector = readonly [number, number, number];

type Edge = {
  direction: Point;
  length: number;
  normal: Point;
  start: Point;
};

type Hit = {
  distance: number;
  normal: Vector;
};

// The Spear AI mark traced from the brand PNG: a truncated triangle wrapped by three chevrons. Every edge sits on a 60°
// lattice. Vertices are counter-clockwise with y up and a unit radius.
const trianglePolygon: Point[] = [
  [-0.1201, 0.5267],
  [-0.5162, -0.1593],
  [-0.396, -0.3673],
  [0.396, -0.3673],
  [0.5162, -0.1593],
  [0.1201, 0.5267],
];

const chevronPolygon: Point[] = [
  [-0.3581, 0.9473],
  [-0.4756, 0.7438],
  [0.243, 0.7438],
  [0.6404, 0.0555],
  [0.7578, 0.2588],
  [0.3603, 0.9473],
];

const columnCount = 80;
const rowCount = 36;
const frameCount = 120;
const frameDuration = 50; // Milliseconds
const spinDuration = frameCount * frameDuration;
const subsampleColumnCount = 3;
const subsampleRowCount = 6;
const minimumCoverage = 0.4;
// Dimmest to brightest. Every character spans cap height to baseline, so a band’s top and bottom edges stay put as its
// shading changes; a ramp mixing in “.-~=+*,;@” moves the edges by a third of a row as characters float or descend.
const characterRamp = "!?1I%O#8";

const halfDepth = 0.11;
// The camera is orthographic: rays run parallel, so every point keeps its height on screen as the mark spins. With
// perspective, whatever swings toward the camera grows, so the bottom chevrons, which reach farthest from the spin axis,
// bob up and down.
const cameraDistance = 5;
const viewWidth = 2.5;
const viewHeight = (viewWidth * 2 * rowCount) / columnCount;

const fontSize = 12;
const characterWidth = fontSize * 0.6;
const lineHeight = characterWidth * 2;

// One file per README theme, named for the theme it’s shown in. Light mode keeps the same ramp, so lit faces are the
// densest ink and the mark reads as solid on white, like the logo printed in black.
const themeList = [
  { color: "#f5f5f5", name: "dark" },
  { color: "#171717", name: "light" },
];

const normalize = ([x, y, z]: Vector): Vector => {
  const length = Math.hypot(x, y, z);

  return [x / length, y / length, z / length];
};

const dot = (a: Vector, b: Vector) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

const rotatePoint = ([x, y]: Point, angle: number): Point => [
  x * Math.cos(angle) - y * Math.sin(angle),
  x * Math.sin(angle) + y * Math.cos(angle),
];

// A point light up and to the left, partway to the side. Faces brighten as they turn toward it and fall into shadow as
// they turn away, and because it’s close, its angle varies across a face, so the brightening sweeps across the face
// instead of flipping it all at once. Moving it farther to the side dims the mark at rest and makes faces flicker.
const lightPosition: Vector = [-3, 2, -cameraDistance];

const unalignedPolygonList = [
  trianglePolygon,
  ...[0, 1, 2].map((index) => chevronPolygon.map((point) => rotatePoint(point, (index * 2 * Math.PI) / 3))),
];

// The mark’s center of symmetry sits below its bounding box’s center, so shift it down to frame it evenly.
const yList = unalignedPolygonList.flat().map(([, y]) => y);
const yOffset = -(Math.max(...yList) + Math.min(...yList)) / 2;
const polygonList = unalignedPolygonList.map((polygon) => polygon.map(([x, y]): Point => [x, y + yOffset]));

// Pairs each vertex with the next one, wrapping around to close the polygon.
const getSideList = (polygon: Point[]) =>
  polygon.map((start, index): [Point, Point] => [start, polygon[(index + 1) % polygon.length] ?? start]);

const edgeList = polygonList.flatMap((polygon) =>
  getSideList(polygon).map(([start, end]): Edge => {
    const length = Math.hypot(end[0] - start[0], end[1] - start[1]);
    const direction: Point = [(end[0] - start[0]) / length, (end[1] - start[1]) / length];

    return { direction, length, normal: [direction[1], -direction[0]], start };
  }),
);

// Even-odd rule: a point is inside when a ray cast toward +x crosses an odd number of sides.
const getIsInsidePolygon = (polygon: Point[], [x, y]: Point) => {
  const crossingCount = getSideList(polygon).filter(
    ([[x1, y1], [x2, y2]]) => y1 > y !== y2 > y && x < ((x2 - x1) * (y - y1)) / (y2 - y1) + x1,
  ).length;

  return crossingCount % 2 === 1;
};

// Intersects a ray with the mark extruded between z = ±halfDepth: either it enters through a cap, or through a wall.
const castRay = (origin: Vector, direction: Vector): Hit | undefined => {
  const [originX, originY, originZ] = origin;
  const [directionX, directionY, directionZ] = direction;
  const nearCapDistance = (-Math.sign(directionZ) * halfDepth - originZ) / directionZ;
  const farCapDistance = (Math.sign(directionZ) * halfDepth - originZ) / directionZ;
  const capPoint: Point = [originX + nearCapDistance * directionX, originY + nearCapDistance * directionY];

  if (polygonList.some((polygon) => getIsInsidePolygon(polygon, capPoint))) {
    return { distance: nearCapDistance, normal: [0, 0, -Math.sign(directionZ)] };
  }

  let closestHit: Hit | undefined;

  for (const { direction: edgeDirection, length, normal, start } of edgeList) {
    const facing = normal[0] * directionX + normal[1] * directionY;

    if (facing >= 0) {
      continue;
    }

    const distance = (normal[0] * (start[0] - originX) + normal[1] * (start[1] - originY)) / facing;

    if (
      distance < nearCapDistance ||
      distance > farCapDistance ||
      distance >= (closestHit?.distance ?? Infinity)
    ) {
      continue;
    }

    const edgeOffset =
      (originX + distance * directionX - start[0]) * edgeDirection[0] +
      (originY + distance * directionY - start[1]) * edgeDirection[1];

    if (edgeOffset >= 0 && edgeOffset <= length) {
      closestHit = { distance, normal: [normal[0], normal[1], 0] };
    }
  }

  return closestHit;
};

// Object space spins around the vertical axis, so every point only moves sideways. Camera space looks down +z with the
// mark at the origin.
const toCameraSpace = ([x, y, z]: Vector, spin: number): Vector => [
  x * Math.cos(spin) + z * Math.sin(spin),
  y,
  -x * Math.sin(spin) + z * Math.cos(spin),
];

const toObjectSpace = ([x, y, z]: Vector, spin: number): Vector => [
  x * Math.cos(spin) - z * Math.sin(spin),
  y,
  x * Math.sin(spin) + z * Math.cos(spin),
];

const getBrightness = (normal: Vector, point: Vector) => {
  const lightDirection = normalize([
    lightPosition[0] - point[0],
    lightPosition[1] - point[1],
    lightPosition[2] - point[2],
  ]);
  return Math.max(0, dot(normal, lightDirection));
};

const renderFrame = (spin: number) => {
  const rayDirection = toObjectSpace([0, 0, 1], spin);
  const lineList: string[] = [];

  for (let row = 0; row < rowCount; row += 1) {
    let line = "";

    for (let column = 0; column < columnCount; column += 1) {
      let brightnessSum = 0;
      let hitCount = 0;

      for (let subsampleRow = 0; subsampleRow < subsampleRowCount; subsampleRow += 1) {
        for (let subsampleColumn = 0; subsampleColumn < subsampleColumnCount; subsampleColumn += 1) {
          const u =
            ((column + (subsampleColumn + 0.5) / subsampleColumnCount) / columnCount - 0.5) * viewWidth;
          const v = (0.5 - (row + (subsampleRow + 0.5) / subsampleRowCount) / rowCount) * viewHeight;
          const hit = castRay(toObjectSpace([u, v, -cameraDistance], spin), rayDirection);

          if (hit !== undefined) {
            brightnessSum += getBrightness(toCameraSpace(hit.normal, spin), [
              u,
              v,
              hit.distance - cameraDistance,
            ]);
            hitCount += 1;
          }
        }
      }

      const coverage = hitCount / (subsampleColumnCount * subsampleRowCount);
      const brightness = hitCount === 0 ? 0 : brightnessSum / hitCount;

      line +=
        coverage < minimumCoverage
          ? " "
          : characterRamp.charAt(Math.round(brightness * (characterRamp.length - 1)));
    }

    lineList.push(line.trimEnd());
  }

  return lineList;
};

const frameList = Array.from({ length: frameCount }, (_, index) =>
  renderFrame((index * 2 * Math.PI) / frameCount),
);

// The background is transparent, so crop to the cells some frame inks instead of leaving empty margins.
const inkedLineList = frameList.flatMap((lineList) => lineList.filter((line) => line !== ""));
const firstRow = Math.min(...frameList.map((lineList) => lineList.findIndex((line) => line !== "")));
const lastRow = Math.max(...frameList.map((lineList) => lineList.findLastIndex((line) => line !== "")));
const firstColumn = Math.min(...inkedLineList.map((line) => line.length - line.trimStart().length));
const lastColumn = Math.max(...inkedLineList.map((line) => line.length)) - 1;

const renderFrameSvg = (lineList: string[], index: number) => {
  const textList = lineList.slice(firstRow, lastRow + 1).flatMap((line, row) => {
    const text = line.trimStart();

    if (text === "") {
      return [];
    }

    const x = (line.length - text.length - firstColumn) * characterWidth;
    const y = (row + 0.8) * lineHeight;

    return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" textLength="${(text.length * characterWidth).toFixed(1)}">${text}</text>`;
  });

  return `<g style="animation-delay:${index * frameDuration}ms">${textList.join("")}</g>`;
};

const width = ((lastColumn - firstColumn + 1) * characterWidth).toFixed(1);
const height = ((lastRow - firstRow + 1) * lineHeight).toFixed(1);
const frameSvgList = frameList.map((lineList, index) => renderFrameSvg(lineList, index));

// Each frame shows for one frameDuration per spin. Whole-millisecond delays and a full-precision keyframe offset make
// each frame hide exactly when the next one shows; rounding either leaves a gap (a blank flash) or an overlap (a double
// exposure).
const renderSvg = (
  color: string,
) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title" xml:space="preserve">
<title id="title">Spear AI logo spinning in 3D ASCII art</title>
<style>
text { fill: ${color}; font: ${fontSize}px ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; white-space: pre; }
g { visibility: hidden; animation: frame ${spinDuration}ms infinite; }
@keyframes frame { 0% { visibility: visible; } ${100 / frameCount}% { visibility: hidden; } }
@media (prefers-reduced-motion: reduce) { g { animation: none; } g:first-of-type { visibility: visible; } }
</style>
${frameSvgList.join("\n")}
</svg>
`;

await Promise.all(
  themeList.map(({ color, name }) =>
    writeFile(new URL(`../citizen-logo-${name}.svg`, import.meta.url), renderSvg(color)),
  ),
);
