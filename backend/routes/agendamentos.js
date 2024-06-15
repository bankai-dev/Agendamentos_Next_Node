// routes/agendamentos.js

const {
    getAgendamentos,
    criarAgendamento,
    atualizarAgendamento,
    deletarAgendamento,
} = require('../hooks/functions/agendamentos');

function agendamentosRoutes(fastify, options, done) {
    // Obtém todos os agendamentos
    fastify.get('/api/agendamentos', getAgendamentos);

    // Cria um novo agendamento
    fastify.post('/api/agendamentos', criarAgendamento);

    // Atualiza um agendamento existente
    fastify.put('/api/agendamentos/:id', atualizarAgendamento);

    // Deleta um agendamento
    fastify.delete('/api/agendamentos/:id', deletarAgendamento);

    done();
}

module.exports = agendamentosRoutes;
