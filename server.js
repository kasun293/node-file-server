const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// serve current directory files
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`File server running at http://0.0.0.0:${PORT}`);
});
