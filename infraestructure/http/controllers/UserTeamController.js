export class UserTeamController {
  constructor(createUserTeamUseCase) {
    this.createUserTeamUseCase = createUserTeamUseCase;
  }

  // Arrow function preserva o contexto do this
  create = async (req, res) => {
    try {
      const userTeamData = req.body;
      const userTeam = await this.createUserTeamUseCase.execute(userTeamData);
      return res.status(201).json(userTeam);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
}
