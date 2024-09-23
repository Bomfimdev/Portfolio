const express = require('express');
const router = express.Router();

// Exemplo de rota para obter itens
router.get('/items', (req, res) => {
    res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
});

module.exports = router;
