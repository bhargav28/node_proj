const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.end("Home Page");
});

app.get("/about", (req, res) => {
    return res.send(`Hello ${req.query.name} age is ${req.query.age}`);
});

app.listen(8000, () => console.log("Server started"));
