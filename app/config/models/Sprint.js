import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import SprintStatus from './SprintStatus.js';

const Sprint = sequelize.define('sprints', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  endedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

Sprint.hasMany(SprintStatus, {
  as: 'status',
  foreignKey: 'sprintId',
});

export default Sprint;
