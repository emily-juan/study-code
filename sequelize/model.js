const Project = sequelize.define('project', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
})

const Task = sequelize.define('task', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline: Sequelize.DATE
})

const Foo = sequelize.define('foo', {
  flag: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  myDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  uniqueOne: {
    type: Sequelize.STRING,
    unique: 'compositeIndex'
  },
  uniqueTwo: {
    type: Sequelize.INTEGER,
    unique: 'compositeIndex'
  },
  someUnique: {
    type: Sequelize.STRING,
    unique: true
  },
  // { someUnique: { type: Sequelize.STRING } },
  // { indexes: [ { unique: true, fields: [ 'someUnique' ] } ] },
  identifier: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  incrementMe: {
    type: Sequelize.INTEGER,
    autoIncrement: true
  },
  filedWithUnderscores: {
    type: Sequelize.STRING,
    field: 'field_with_underscores'
  },
  bar_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Bar,
      key: 'id',
      deferable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
});