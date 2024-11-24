const sequelize = require('./config/db');
const User = require('./models/User');
const express = require('express');
const UserRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/users', UserRoutes);
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});

sequelize
.authenticate()
.then(() => console.log('Conexão com o banco de dados estabelecida!'))
.catch((error) => console.error('Erro ao conectar ao banco:', error));

sequelize.sync({}).then(() => {
    console.log('Banco sincronizado!');
});