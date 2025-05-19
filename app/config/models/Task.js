import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import User from './User.js';
import UserTask from './UserTask.js';

const Task = sequelize.define('tasks', {
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

Task.associate = function (models) {
  Task.belongsToMany(models.User, {
    through: UserTask,
    foreignKey: 'taskId',
    otherKey: 'userId',
  });
};

export default Task;
