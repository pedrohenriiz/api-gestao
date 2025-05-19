import User from '../../app/config/models/User.js';
import InterfaceUserRepository from '../../domain/repositories/UserRepositoryInterface.js';

// Gerencia como os dados são lidos e salvos no banco de dados
// Fornece uma interface para manipulação das entidades, sem que o restante da aplicação precise se preocupar com os detalhes de como os dados são armazenados ou recuperados
export class UserRepository extends InterfaceUserRepository {
  async create({ name, email, password }) {
    const user = await User.create({ name, email, password });
    return user;
  }
}
