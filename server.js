const express = require("express");

const server = express();

server.get("/", (req, res) => {
    res.send("hello");
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})