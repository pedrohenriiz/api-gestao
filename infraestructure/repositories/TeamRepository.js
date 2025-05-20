import Team from '../../app/config/models/Team.js';
import InterfaceTeamRepository from '../../domain/repositories/TeamRepositoryInterface.js';

export class TeamRepository extends InterfaceTeamRepository {
  async create({ name }) {
    const team = await Team.create({ name });
    return team;
  }
}
