export class TeamController {
  constructor(createTeamUseCase) {
    this.createTeamUseCase = createTeamUseCase;
  }

  // Arrow function preserva o contexto do this
  create = async (req, res) => {
    try {
      const teamData = req.body;
      const team = await this.createTeamUseCase.execute(teamData);
      return res.status(201).json(team);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
}
