import UserTeam from '../../app/config/models/UserTeam.js';
import InterfaceUserTeamRepository from '../../domain/repositories/UserTeamRepositoryInterface.js';

export class UserTeamRepository extends InterfaceUserTeamRepository {
  async create({ userId, teamId }) {
    const userTeam = await UserTeam.create({ userId, teamId });

    return userTeam;
  }
}
