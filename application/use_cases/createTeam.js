import { TeamRepository } from '../../infraestructure/repositories/TeamRepository.js';

// Representa as ações que os usuários podem fazer no sistema.
export default class CreateTeam {
  constructor(teamRepository = new TeamRepository()) {
    this.teamRepository = teamRepository;
  }

  async execute({ name }) {
    const team = this.teamRepository.create({
      name,
    });

    return team;
  }
}
