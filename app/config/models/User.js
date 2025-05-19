import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Team from './Team.js';
import UserTeam from './UserTeam.js';
import Deviation from './Deviation.js';
import UserDeviation from './UserDeviation.js';
import Task from './Task.js';
import UserTask from './UserTask.js';

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.associate = function (models) {
  User.belongsToMany(models.Team, {
    through: UserTeam,
    foreignKey: 'userId',
    otherKey: 'teamId',
  });

  User.belongsToMany(models.Deviation, {
    through: UserDeviation,
    foreignKey: 'userId',
    otherKey: 'deviationId',
  });

  User.belongsToMany(models.Task, {
    through: UserTask,
    foreignKey: 'userId',
    otherKey: 'taskId',
  });
};

export default User;
