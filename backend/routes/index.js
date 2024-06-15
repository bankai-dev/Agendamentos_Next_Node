

const fastify = require('../app');
const agendamentosRoutes = require('./agendamentos');

function registerRoutes() {
    fastify.register(agendamentosRoutes);
}

module.exports = registerRoutes;
