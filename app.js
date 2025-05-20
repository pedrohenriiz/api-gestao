import express from 'express';
import sequelize from './app/config/database.js';

import userRoutes from './infraestructure/http/routes/userRoutes.js';
import teamRoutes from './infraestructure/http/routes/teamRoutes.js';
import userTeamRoutes from './infraestructure/http/routes/userTeamRoutes.js';

const app = express();
app.use(express.json());

const routes = [
  {
    path: '/users',
    routes: userRoutes,
  },
  {
    path: '/teams',
    routes: teamRoutes,
  },
  {
    path: '/user-teams',
    routes: userTeamRoutes,
  },
];

app.get('/', (req, res) => res.send('API rodando!'));

routes.forEach((route) => app.use(route.path, route.routes));

// app.use('/users', userRoutes);

// app.use('/teams', teamRoutes);

sequelize.sync({ force: false, alter: false }).then(() => {
  console.log('Banco sincronizado.');
  app.listen(3000, () => console.log('Servidor na porta 3000'));
});
