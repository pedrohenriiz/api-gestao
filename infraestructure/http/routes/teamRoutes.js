import express from 'express';

import { TeamRepository } from '../../repositories/TeamRepository.js';
import CreateTeam from '../../../application/use_cases/createTeam.js';
import { TeamController } from '../controllers/TeamController.js';

const router = express.Router();

const teamRepository = new TeamRepository();
const createTeamUseCase = new CreateTeam(teamRepository);

const controller = new TeamController(createTeamUseCase);

router.post('/', controller.create);

export default router;
