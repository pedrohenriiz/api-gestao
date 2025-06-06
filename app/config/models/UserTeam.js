import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const UserTeam = sequelize.define('usersTeams', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  teamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default UserTeam;
