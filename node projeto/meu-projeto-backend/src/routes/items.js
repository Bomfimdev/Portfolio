const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Rota para criar um novo item
router.post('/', async (req, res) => {
    const { name, description } = req.body;
    const newItem = new Item({ name, description });
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Rota para listar todos os itens
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
