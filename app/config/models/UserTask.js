import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const UserTask = sequelize.define('usersTasks', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  teamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default UserTask;
