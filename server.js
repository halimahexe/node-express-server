const express = require("express");

const server = express();

// server.get("/", (req, res, next) => {
//     console.log(req.method + " " + req.url);
//     next();
// })

// server.get("/", (req, res) => {
//     const time = new Date().toLocaleTimeString();
//     res.send(`<h1>Hello</h1>`);
// });

// Use a function called logger to pass multiple handler functions:

function logger(req, res, next) {
    console.log(req.method + " " + req.url);
    next();
}

server.get("/", logger, (req, res) => {
    res.send("<h1>Hello</h1>");
})

server.get("/json", (req, res) => {
    res.send({message: "Hello"});
});

server.get("/redirects", (req, res) => {
    res.redirect("/");
});

server.get("/users/:name", (req, res) => {
    const name = req.params.name;
    res.send(`<h1>Hello ${name}</h1>`);
});

// Catch-all handler

server.use((req, res) => {
    res.status(404).send(`<h1>Not found</h1>`);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});