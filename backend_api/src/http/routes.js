
const knex = require('../../db/knex');

const routes = (server) => {

    // rotas REST

    const department = require('../services/department')
    const employee = require('../services/employee')
    const movement = require('../services/movement')

    department(server, knex)
    employee(server, knex)
    movement(server, knex)
}

module.exports = routes