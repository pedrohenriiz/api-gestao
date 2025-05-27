import TokenService from '../../services/token/tokenService.js';

const tokenService = TokenService;

export function authMiddleware(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return response
      .status(401)
      .json({ error: 'Token não encontrado ou inválido!' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const userData = tokenService.verify(token);
    request.user = userData;

    next();
  } catch (error) {
    return response.status(401).json({ error: error.message });
  }
}
