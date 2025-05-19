import Deviation from './Deviation.js';
import Sprint from './Sprint.js';
import Status from './Status.js';
import Task from './Task.js';
import UserDeviation from './UserDeviation.js';
import UserTask from './UserTask.js';
import UserTeam from './UserTeam.js';
import User from './User.js';
import Team from './Team.js';
import SprintStatus from './SprintStatus.js';

const models = {
  Deviation,
  Sprint,
  SprintStatus,
  Status,
  Task,
  UserDeviation,
  UserTask,
  User,
  Team,
  UserTeam,
};

Object.keys(models).forEach((model) => {
  if ('associate' in models[model]) {
    models[model].associate(models);
  }
});

export default models;
