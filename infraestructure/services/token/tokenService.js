import jwt from 'jsonwebtoken';

class TokenService {
  generate(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
  }
}
export default new TokenService();
