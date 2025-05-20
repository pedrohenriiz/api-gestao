import { DataTypes } from 'sequelize';
import sequelize from '../database.js';
import UserDeviation from './UserDeviation.js';

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

Deviation.associate = function (models) {
  Deviation.belongsToMany(models.User, {
    through: UserDeviation,
    foreignKey: 'deviationId',
    otherKey: 'userId',
  });
};

export default Deviation;
