/** @type {import('fastify').FastifyPluginAsync<>} */
import agendamentosFunction from '../functions/agendamentos/list.js';
import createAgendamentoFunction from '../functions/agendamentos/create.js';
import getAgendamentoFunction from '../functions/agendamentos/get.js';
import deleteAgendamentoFunction from '../functions/agendamentos/delete.js';
import updateAgendamentoFunction from '../functions/agendamentos/update.js';

export default async function agendamentos(app, options) {
    app.get('/agendamentos', agendamentosFunction);
    app.post('/agendamentos', createAgendamentoFunction);
    app.get('/agendamentos/:id', getAgendamentoFunction);
    app.delete('/agendamentos/:id', deleteAgendamentoFunction);
    app.put('/agendamentos/:id', updateAgendamentoFunction);
}
