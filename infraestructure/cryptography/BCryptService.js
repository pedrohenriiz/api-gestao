import bcryptjs from 'bcryptjs';

class BCryptService {
  async hash(password) {
    console.log(bcryptjs);

    return bcryptjs.hash(password, 10);
  }

  async compare(password, hashed) {
    return bcryptjs.hash(password, hashed);
  }
}
export default new BCryptService();
