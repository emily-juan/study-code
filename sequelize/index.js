const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  operatorsAliases: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: './database.sqlite',
  define: {
    timestamps: false
  }
});

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

async function createModel() {
  // Model
  await User.sync({
    force: true
  });

  // create
  await User.create({
    firstName: 'John',
    lastName: 'Hancock'
  }, {
    firstName: 'Test',
    lastName: 'Test'
  }, {
    firstName: 'User',
    lastName: 'User'
  });

  // query
  const users = await User.findAll({
    where: {
      $or: {
        firstName: {
          $like: 'User',
        },
        lastName: {
          $like: 'Test',
        }
      },
      firstName: 'John',
    }
  });
  console.log(users);

  const user = await User.findOne();
  console.log(user.get('firstName'));
}

createModel();