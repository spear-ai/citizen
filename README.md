<div align="center">
  <p>
    <img alt="Logo" src="citizen-logo.svg" width="192">
  </p>
  <p>
    <b>Spear AI Code Citizen</b>
  </p>
  <quote>
    <p>
      “This code is what it is because of its citizens” — Plato
    </p>
  </quote>
</div>

# Goal

Decrease net cognitive complexity for developers.

# Assumptions

The rules in this guide are intended to work well with the following assumptions:

## Read & Write

Developers read code more than they write code, and internal developers write code more than outside collaborators:

- Readability > Writeability
- Writeability for _internal_ developers > Writeability for outside collaborators

## Screen size

Developers have medium–large displays:

- Long lines are less likely to wrap

## GitHub

Developers use GitHub:

- Side-by-side line diffs are **119** characters long

## VSCode

Developers use VSCode:

- Auto-formatting, auto-linting, and code completion reduces keystrokes

# Legend

[!] Indicates that a rule is controversial.

# Rules

## Language

**TODO:** Fill me out

## Files

**TODO:** Fill me out

## Copy

### ¶ cE.K6: DO begin type descriptions with an indefinite article

Do begin type descriptions with an _indefinite_ article (“a/an”).

**SQL:**

```sql
-- ✓ Good
COMMENT ON TABLE unit IS 'A unit.';
```

```sql
-- ✗ Bad
COMMENT ON TABLE unit IS 'The unit.';
```

**GraphQL:**

```graphql
# ✓ Good
type Unit {
  """A unit."""
}
```

```graphql
# ✗ Bad
type Unit {
  """The unit."""
}
```

### ¶ cE.re: DO begin type property descriptions with a definite article

Do begin type property descriptions with a _definite_ article (“the”) when applicable.

**SQL:**

```sql
-- ✓ Good
COMMENT ON COLUMN unit.name IS 'The name of a unit.';
```

```sql
-- ✗ Bad
COMMENT ON COLUMN unit.name IS 'A name of a unit.';
```

**GraphQL:**

```graphql
#  ✓ Good
type Unit {
  name: String
  """The name of a unit."""
}
```

```graphql
#  ✗ Bad
type Unit {
  name: String
  """A name of a unit."""
}
```

**python:**

```py
# ✓ Good
class Unit:
    name: str  # The name of a unit.
```

```py
# ✗ Bad
class Unit:
    name: str  # A name of a unit.
```

## Comments

### ¶ LW.n8: DO communicate intent

Comments should explain intent rather than what the code is doing.
If it's unclear what the code is doing then it should be refactored.

### ¶ LW.8j: DO show examples

Do show examples when possible.

**js:**

```ts
// Get a unit's globally unique identifier.
//
// (“Zumwalt-class destroyer”, 3) → “Unit:ZumwaltClassDestroyer:3”
// (“Leopard 2A7”, 5) → “Unit:Leopard2a7:5”
const getUnitId = (name: string, index: number) => `Unit:${pascalCase(name)}:${index}`;
```

### ¶ LW.hb: DO use sentence case

Do use [sentence case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case) in comments.

**py:**

```py
#  ✓ Good
#  Use Manhattan distance because it performs better on high dimensional data
distance = scipy.spatial.distance.cdist(tensor_a, tensor_b, metric='cityblock')
```

```py
#  ✗ Bad
#  use manhattan distance because it performs better on high dimensional data
distance = scipy.spatial.distance.cdist(tensor_a, tensor_b, metric='cityblock')
```

**js:**

```ts
// ✓ Good
// Choose a background color that matches the sky
const backgroundColor = "#2ebde5"; // Azure
```

```ts
/* eslint-disable capitalized-comments */

// ✗ Bad
// choose a background color that matches the sky
const backgroundColor = "#2ebde5"; // azure
```

### ¶ LW.nA: DO punctuate multi-line comments

Do use punctuation on multi-line comments.

**py:**

```py
#  ✓ Good
#  Lorem ipsum dolor sit amet. Consectetur adipiscing elit.
placeholder_text = …
```

```py
#  ✗ Bad
#  Lorem ipsum dolor sit amet. Consectetur adipiscing elit
placeholder_text = …

#  ✗ Bad
#  Lorem ipsum dolor sit amet
#  Consectetur adipiscing elit
placeholder_text = …
```

### ¶ LW.XU: DO punctuate documentation-as-code

Do punctuate comments that serve as documentation.
These comments often generate Website docs, CLI arguments, etc.

```py
@dataclass
class FetchBananasResponse
    """The API response for fetching bananas."""

    banana_list: List[Banana]
    """A list of varying length bananas."""

@dataclass
class Banana:
    """An irresistible fruit loved by all the great apes."""

    is_ripe: bool
    """Whether it is ready for eating."""

    length: float
    """The length in meters."""
```

### ¶ LW.Sf: DO inline short comments

```py
# ✓ Good
speed = … #  Meters per hour
time = … #  Minutes
distance = speed / (time / 60) #  Meters
```

## Variables

### ¶ 9W.a. DO follow casing conventions

Follow the casing conventions of the current language.

**json:**

```json
{
  "boundingBox": [0, 0, 10, 10]
}
```

**python:**

```py
bounding_box = [0, 0, 10, 10]
```

**rust:**

```rust
let bounding_box: [i32; 4] = [0, 0, 10, 10];
```

**typescript:**

```ts
const boundingBox = [0, 0, 10, 10];
```

### ¶ 9W.MX: DO favor readability to brevity

Do favor readability to brevity.

```py
#  ✓ Good
docker_image = "huggingface/transformers-pytorch-gpu"
ec2_instance_type = "p3.8xlarge"
```

```py
#  ✗ Bad
image = "huggingface/transformers-pytorch-gpu"
type = "p3.8xlarge"
```

### ¶ 9W.qP: DO group with a prefix

Do group related variables with a prefix.

```py
#  ✓ Good
cnn_kernel = (3, 3)
cnn_stride = (1, 1)
learning_rate = 1e-05
```

```py
# ✗ Bad
kernel = (3, 3)
stride = (1, 1)
learning_rate = 1e-05
```

### ¶ 9W.hn: DO space out pre/post-fixes

Do insert a space before postfixes and after prefixes.

```py
# ✓ Good
hidden_layer_0 = "…"
hidden_layer_1 = "…"
```

```py
# ✗ Bad
hidden_layer0 = "…"
hidden_layer1 = "…"
```

```ts
// ✓ Good
const userName = "…";
const userPassword = "…";
```

```ts
// ✗ Bad
const username = "…";
const userPassword = "…";
```

### ¶ 9W.qV: DON’T use abbreviations

Don’t use abbreviations. They’re more likely to encounter naming conflicts.
They must also be be learned and memorized.

```py
# ✓ Good
directory = "data/units"
unit_direction = "NORTH"
```

```py
# ✗ Bad
dir = "data/units"
unit_dir = "NORTH"
```

```py
# ✓ Good
result, error = action()
response = request()
```

```py
# ✗ Bad
res, err = action()
res = req()
```

```py
# ✓ Good
sagemaker = SageMaker()
hyperparameters = {…}
```

```py
# ✗ Bad
sm = SageMaker()
hparams = {…}
```

### ¶ 9W.cv: DO use acronyms

Do use acronyms and initialisms. They’re well known and less verbose.
Moreover, the words they represent are often unknown; so must be learned and memorized

```py
# ✓ Good
nato_classification = "cosmic"
radar_range = 1_700_150  # meters
```

```py
# ✗ Bad
north_atlantic_treaty_organization_classification = "cosmic"
radio_detection_and_ranging_range = 1_700_150  # meters
```

```py
# ✓ Good
s3_bucket = "secret-stuff"
website_url = "https://spear.ai"
```

```py
# ✗ Bad
simple_storage_service_bucket = "secret-stuff"
website_uniform_resource_locator = "https://spear.ai"
```

### ¶ 9W.MM: DON’T invent acronyms

Don’t invent acronyms or initialisms _unless_ external users would find it easier to use.
They’re _not_ well known; so must be learned and memorized.

```py
# ✓ Good
aerial_unit_direction = (0.8, 0.45)
aerial_unit_speed = 329
```

```py
# ✗ Bad
au_direction = (0.8, 0.45)
au_speed = 329
```

```py
# ✓ Good
rcn_has_attention = True
rcn_hidden_layer_size = 40
```

```py
# ✗ Bad
really_cool_network_has_attention = True
really_cool_network_hidden_layer_size = 40
```

### ¶ 9W.Co: DO add type hints

Do add type hints. Many names are ambiguous and can be confused for booleans, dates, functions, etc.

**python:**

```py
# ✓ Good
created_date = "1776-07-04T04:56:02.000Z"
was_published = True
```

```py
# ✗ Bad
created = "1776-07-04T04:56:02.000Z"
published = True
```

**typescript:**

```ts
// ✓ Good
fileBuffer = await fs.readFile("…");
isLoaded = false;
```

```ts
// ✗ Bad
file = await fs.readFile("…");
loaded = false;
```

### ¶ 9W.4R: DO differentiate types

Do differentiate types. It’s hard to switch between contexts when variable names represent different types.

```py
# ✓ Good
url = "https://spear.ai"
parsed_url = urlparse("https://spear.ai")

# ✓ Good
agent_id = "10"
agent = Agent(id="10", type=Tiger)
```

```py
# ✗ Bad
url = "https://spear.ai"
url = urlparse("https://spear.ai")

# ✗ Bad
agent = "10"
agent = Agent(id="10", type=Tiger)
```

### ¶ 9W.6u: DON’T add type definitions

Don’t add type definitions.

Reasons:

- They add superfluous information
- They increase refactoring costs
- They decrease portability

```py
# ✓ Good
age = 21
confidence = 0.9
```

```py
# ✗ Bad
age_int = 21
confidence_float = 0.9
```

```ts
// ✓ Good
const balance = BigInt(7_301_985);
const mask = new Uint8Array();
```

```ts
// ✗ Bad
const bigIntBalance = BigInt(7_301_985);
const maskUint8Array = new Uint8Array();
```

### ¶ 9W.ZX: DO use boolean verbs

Do use appropriate boolean verbs.

```py
# ✓ Good
can_delete = True
has_feature = True
should_reset = True
```

```py
# ✗ Bad
is_deletable = True
features = True
reset = True
```

### ¶ 9W.6t: DO be positive

Do be positive with boolean variables.

**python:**

```py
# ✓ Good
is_enabled = True
is_visible = False
```

```py
# ✗ Bad
is_disabled = False
is_not_visible = True
```

**tsx:**

```tsx
// ✓ Good
<Tab isActive>Click me</Tab>
```

```tsx
// ✗ Bad
<Tab isInactive={false}>Click me</Tab>
```

### ¶ 9W.jt: DO use correct tense

Do use the correct tense.

```py
if was_suspended and not is_suspended:
    print("Welcome back!")
```

### ¶ 9W.fY: DON’T pluralize collections [[!]](#legend)

Don’t pluralize collections. Instead, specify the collection type.

Some object names are already plural. Therefore, it’s impossible to name a collection of those objects.
Moreover, [Uncountable nouns](https://en.wikipedia.org/wiki/Mass_noun) can’t be pluralized.

Specifying the collection type also clarifies which operations are allowed.
For example, a `List` can be appended or prepended to. Whereas, a `Set` can be added or removed from.

```py
# ✓ Good
equipment_list = [{…}, {…}, …, {…}]
equipment = equipment_list[0]

# ✓ Good
settings_map = {"0": {…}, "1": {…}, …, "n": {…}]
settings = settings_map["0"]

# ✓ Good
id_list = ["0", "1", "2", "0"]
id_list.append("2")
id_set = set(id_list)
```

```py
# ✗ Bad
equipment = [{…}, {…}, …, {…}]
equipment = equipment[0]

# ✗ Bad
settings = {"0": {…}, "1": {…}, …, "n": {…}]
settings = settings["0"]

# ✗ Bad
ids = ["0", "1", "2", "0"]
ids.append("2")
distinct_ids = set(ids)
```

```console
# ✓ Good
curl https://api.spear.ai/user
curl https://api.spear.ai/user/5
```

```console
# ✗ Bad
curl https://api.spear.ai/users
curl https://api.spear.ai/users/5
```

```sql
-- ✓ Good
SELECT * FROM person
SELECT * FROM person_address
```

```sql
-- ✗ Bad
SELECT * FROM people
SELECT * FROM people_addresses
```

## Data formats

### Color

#### ¶ Ts.Ef: DO prefer hex color codes

```ts
// ✓ Good
const successHexColorCode = "#297c3b";
const failureHexColorCode = "#ca3214";
```

```ts
// ✗ Bad
const successRgbColorCode = "rgb(41, 124, 59)";
const failureRgbColorCode = "rgb(202, 50, 20)";
```

_Exception: A library requires another format._
_Exception: Manipulation is easier in another format. (e.g. HSL)_

#### ¶ Ts.8M: DO use longhand hex color codes

```ts
// ✓ Good
const color = "#ff0000";
const colorAlpha = "#ff0000ff";
```

```ts
// ✗ Bad
const color = "#f00";
const colorAlpha = "#f00f";
```

#### ¶ Ts.G0: DO use lowercase hex color codes

```ts
// ✓ Good
const backgroundColor = "#edf6ff";
const foregroundColor = "#006adc";
```

```ts
// ✗ Bad
const backgroundColor = "#EDF6FF";
const foregroundColor = "#006ADC";
```

#### ¶ Ts.2g: DO make color format explict in non-HTML contexts

```graphql
# ✓ Good
type ClassLabel {
  id: ID!
  hexColorCode: HexColorCode
}
```

```graphql
# ✗ Bad
type ClassLabel {
  id: ID!
  color: HexColorCode
}
```

```sql
-- ✓ Good
SELECT id, hex_color_code FROM class_label
```

```sql
-- ✗ Bad
SELECT id, color FROM class_label
```
