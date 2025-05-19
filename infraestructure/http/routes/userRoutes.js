import express from 'express';

import { UserController } from '../controllers/UserController.js';
import CreateUser from '../../../application/use_cases/createUser.js';
import { UserRepository } from '../../repositories/UserRepository.js';

const router = express.Router();

const userRepository = new UserRepository();
const createUserUseCase = new CreateUser(userRepository);

const controller = new UserController(createUserUseCase);

router.post('/', controller.create);

export default router;
