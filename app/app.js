const express = require("express");

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello from the Node.js container!",
    hostname: require("os").hostname(),
    port: PORT
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Node.js app listening on port ${PORT}`);
});
