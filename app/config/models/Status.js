import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import SprintStatus from './SprintStatus.js';

// São os status das sprints que a pessoa pode cadastrar

const Status = sequelize.define('status', {
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

Status.belongsTo(SprintStatus, {
  as: 'sprintStatus',
  foreignKey: 'sprintStatusId',
});

export default Status;
