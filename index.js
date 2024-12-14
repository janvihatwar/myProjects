const express = require("express");
const cors = require("cors");

const app = express();  // Extracting express

// Define CORS options once
app.use(cors({
    origin: 'https://janvihatwar.github.io/myProjects', // Replace with your frontend URL
    methods: ['GET', 'POST'], // Restrict to necessary methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Optional headers
}));

const port = process.env.PORT || 3000; // Adding port 

const apiData = require("./data.json"); // Extracting data from data.json

app.get("/", (req, res) => {
    res.send("Hello, I am live");
});

app.get("/projects", (req, res) => { // If user writes /projects in URL, apiData should be displayed
    res.send(apiData);
});

app.listen(port, () => {
    console.log("I am live again");
});
