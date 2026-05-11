const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/foods", (req, res) => {
    const data = fs.readFileSync("./data/data.json", "utf-8");
    const foods = JSON.parse(data);

    res.json(foods);
});
// Add Items.

app.post("/foods", (req, res) => {
    const data = fs.readFileSync("./data/data.json", "utf-8");
    const foods = JSON.parse(data);

    const newFood = req.body;
    newFood.id = Date.now();

    foods.push(newFood);

    fs.writeFileSync("./data/data.json", JSON.stringify(foods, null, 2));

    res.json({ message: "Food added", food: newFood });
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});