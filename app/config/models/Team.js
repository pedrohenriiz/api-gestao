import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import UserTeam from './UserTeam.js';
import User from './User.js';

const Team = sequelize.define('teams', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Team.associate = function (models) {
  Team.belongsToMany(models.User, {
    through: UserTeam,
    foreignKey: 'teamId',
    otherKey: 'userId',
  });
};

export default Team;
