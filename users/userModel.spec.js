// const Users = require('./hobbitsModel.js');

// const db = require('../data/dbConfig.js');

it('should set testing environment', () => {
  expect(process.env.DB_ENV).toBe('testing');
});