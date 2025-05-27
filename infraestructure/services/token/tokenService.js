import jwt from 'jsonwebtoken';

class TokenService {
  constructor() {
    this.secret = process.env.JWT_SECRET;
  }

  generate(payload) {
    return jwt.sign(payload, this.secret, { expiresIn: '1d' });
  }

  verify(token) {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      throw new Error('Token inválido!');
    }
  }
}
export default new TokenService();
