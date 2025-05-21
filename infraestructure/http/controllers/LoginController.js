export class LoginController {
  constructor(loginUserUseCase) {
    this.loginUserUseCase = loginUserUseCase;
  }

  login = async (request, response) => {
    const userData = request.body;

    try {
      const token = await this.loginUserUseCase.execute(userData);

      return response.status(200).json({ token });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  };
}
