let foo: string | null | undefined;

if (foo != null && foo !== "") {
  console.log("HERE"); // eslint-disable-line no-console
}
