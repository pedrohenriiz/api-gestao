import express from 'express';

import { UserTeamRepository } from '../../repositories/UserTeamRepository.js';
import { UserTeamController } from '../controllers/UserTeamController.js';
import CreateUserTeam from '../../../application/use_cases/createUserTeam.js';

const router = express.Router();

const userTeamRepository = new UserTeamRepository();
const createUserTeamUseCase = new CreateUserTeam(userTeamRepository);

const controller = new UserTeamController(createUserTeamUseCase);

router.post('/', controller.create);

export default router;
