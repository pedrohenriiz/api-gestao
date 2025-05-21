import express from 'express';

import { UserRepository } from '../../repositories/UserRepository.js';
import LoginUser from '../../../application/use_cases/loginUser.js';
import { LoginController } from '../controllers/LoginController.js';

const router = express.Router();

const userRepository = new UserRepository();

const loginUserUseCase = new LoginUser(userRepository);

const controller = new LoginController(loginUserUseCase);

router.post('/', controller.login);

export default router;
