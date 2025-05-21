export class UserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  // Arrow function preserva o contexto do this
  create = async (req, res) => {
    try {
      const userData = req.body;

      const user = await this.createUserUseCase.execute(userData);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
}
