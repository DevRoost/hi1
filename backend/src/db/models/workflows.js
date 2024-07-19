const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const workflows = sequelize.define(
    'workflows',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
      },

      type: {
        type: DataTypes.ENUM,

        values: [
          'JobPostingNotifications',

          'ApplicationAcknowledgement',

          'InterviewScheduling',

          'StatusUpdates',

          'DocumentCollection',

          'ReminderNotifications',

          'FeedbackCollection',

          'OnboardingProcess',

          'DataBackup',

          'ComplianceChecks',

          'PerformanceReports',
        ],
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  workflows.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.workflows.belongsTo(db.organizations, {
      as: 'organization',
      foreignKey: {
        name: 'organizationId',
      },
      constraints: false,
    });

    db.workflows.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.workflows.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return workflows;
};
