import { UserTeamRepository } from '../../infraestructure/repositories/UserTeamRepository.js';

// Representa as ações que os usuários podem fazer no sistema.
export default class CreateUserTeam {
  constructor(userTeamRepository = new UserTeamRepository()) {
    this.userTeamRepository = userTeamRepository;
  }

  async execute({ userId, teamId }) {
    const userTeam = this.userTeamRepository.create({
      userId,
      teamId,
    });

    return userTeam;
  }
}
