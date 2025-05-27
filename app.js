import express from 'express';
import sequelize from './app/config/database.js';

import loginRoutes from './infraestructure/http/routes/loginRoutes.js';
import userRoutes from './infraestructure/http/routes/userRoutes.js';
import teamRoutes from './infraestructure/http/routes/teamRoutes.js';
import userTeamRoutes from './infraestructure/http/routes/userTeamRoutes.js';
import { authMiddleware } from './infraestructure/http/middleware/authMiddleware.js';

const app = express();
app.use(express.json());

const privateRoutes = [
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

app.use(loginRoutes);

app.use(authMiddleware);

privateRoutes.forEach((route) => app.use(route.path, route.routes));

sequelize.sync({ force: false, alter: false }).then(() => {
  console.log('Banco sincronizado.');
  app.listen(3000, () => console.log('Servidor na porta 3000'));
});
