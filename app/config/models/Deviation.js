import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import UserDeviation from './UserDeviation.js';
import User from './User.js';

const Deviation = sequelize.define('deviations', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Deviation.belongsToMany(User, {
  through: UserDeviation,
  foreignKey: 'deviationId',
  otherKey: 'userId',
});

export default Deviation;
