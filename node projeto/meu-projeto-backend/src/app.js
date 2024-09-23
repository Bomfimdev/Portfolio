const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const apiRoutes = require('./routes/api'); // Importando as rotas
app.use('/api', apiRoutes); // Usando as rotas

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const connectDB = require('./db');

// Conectar ao banco de dados
connectDB();
const itemsRoute = require('./routes/items');

app.use(express.json()); // Para entender o corpo das requisições JSON
app.use('/api/items', itemsRoute);
