import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import Sprint from './Sprint.js';

// Indicará o status da sprint

const SprintStatus = sequelize.define('sprintStatus', {
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

SprintStatus.belongsTo(Sprint, {
  as: 'sprintStatus',
  foreignKey: 'sprintId',
});

SprintStatus.hasMany(Status, {
  as: 'sprintStatus',
  foreignKey: 'sprintStatusId',
});

export default SprintStatus;
