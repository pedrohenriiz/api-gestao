import BCryptService from '../../infraestructure/cryptography/BCryptService.js';
import { UserRepository } from '../../infraestructure/repositories/UserRepository.js';
import TokenService from '../../infraestructure/services/token/tokenService.js';

export default class LoginUser {
  constructor(userRepository = new UserRepository()) {
    this.userRepository = userRepository;
  }

  async execute({ email, password }) {
    const user = await this.userRepository.findByEmail({ email });

    if (!user) {
      throw new Error('Usuário não encontrado!');
    }

    const isPasswordValid = await BCryptService.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error('E-mail ou senha incorretos!');
    }

    const token = TokenService.generate({ userId: user.id });

    return token;
  }
}
