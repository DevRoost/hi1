const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const job_postings = sequelize.define(
    'job_postings',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
      },

      status: {
        type: DataTypes.ENUM,

        values: ['Open', 'Closed'],
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

  job_postings.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.job_postings.hasMany(db.applications, {
      as: 'applications_job',
      foreignKey: {
        name: 'jobId',
      },
      constraints: false,
    });

    //end loop

    db.job_postings.belongsTo(db.users, {
      as: 'posted_by',
      foreignKey: {
        name: 'posted_byId',
      },
      constraints: false,
    });

    db.job_postings.belongsTo(db.organizations, {
      as: 'organization',
      foreignKey: {
        name: 'organizationId',
      },
      constraints: false,
    });

    db.job_postings.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.job_postings.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return job_postings;
};
