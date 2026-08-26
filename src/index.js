const app = require("./app");
const { port } = require("./config/env");

app.listen(port, () => {
  console.log(`Synora server listening on port ${port}`);
});
