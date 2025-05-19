import express from 'express';
import sequelize from './app/config/database.js';
import models from './app/config/models/index.js';

import userRoutes from './infraestructure/http/routes/userRoutes.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('API rodando!'));

app.use('/users', userRoutes);

sequelize.sync({ force: false, alter: false }).then(() => {
  console.log('Banco sincronizado.');
  app.listen(3000, () => console.log('Servidor na porta 3000'));
});
