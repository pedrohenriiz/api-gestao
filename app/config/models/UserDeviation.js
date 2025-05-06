import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const UserDeviation = sequelize.define('usersDeviations', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  deviationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default UserDeviation;
