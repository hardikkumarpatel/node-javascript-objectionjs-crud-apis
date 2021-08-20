const { Model } = require('objection');
const Knex = require('knex');

const { Client } = require('pg');
console.log(Client);

const knex = Knex({
  client: 'pg',
  useNullAsDefault: true,
  searchPath: ['public'],
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'postgres',
  },
});

Model.knex(knex);

module.exports = Model;
