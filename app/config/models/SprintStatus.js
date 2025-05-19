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

SprintStatus.associate = function (models) {
  SprintStatus.belongsTo(models.Sprint, {
    as: 'sprint',
    foreignKey: 'sprintId',
  });

  SprintStatus.hasMany(models.Status, {
    as: 'sprintStatus',
    foreignKey: 'sprintStatusId',
  });
};

export default SprintStatus;
