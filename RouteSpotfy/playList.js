const express = require("express");
const data = require("../data");

const router = express.Router();

router.post("/add-music", (req, res) => {
    data.push(req.body);
    return res.status(201).json("Musica adicionada");
});

router.get("/all-music", (req, res) => {
    return res.status(200).json(data);
    
});

router.delete("/delete-music/:index", (req, res) => {
    const { index } = req.params;
    data.splice(index,1);
    return res.status(204).json({});
});

router.put("/update-music/:index", (req, res) => {
    const { index } = req.params;
    const music = req.body;
    data[index] = music;
    return res.status(201).json("Musica alterada");
});

module.exports = router;