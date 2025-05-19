import BCryptService from '../../infraestructure/cryptography/BCryptService.js';
import { UserRepository } from '../../infraestructure/repositories/UserRepository.js';

// Representa as ações que os usuários podem fazer no sistema.
export default class CreateUser {
  constructor(userRepository = new UserRepository()) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {
    const hashedPassword = await BCryptService.hash(password);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}
