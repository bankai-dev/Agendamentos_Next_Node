

const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));


const AgendamentoSchema = new mongoose.Schema({
    horario: String,
    tipo: String,
    status: { type: String, default: 'Disponível' },
});


const Agendamento = mongoose.model('Agendamento', AgendamentoSchema);


fastify.get('/api/agendamentos', async (request, reply) => {
    try {
        const agendamentos = await Agendamento.find();
        reply.send(agendamentos);
    } catch (error) {
        reply.status(500).send({ error: 'Erro ao buscar agendamentos' });
    }
});


const start = async () => {
    try {
        await fastify.listen(3001);
        fastify.log.info(`Servidor rodando em ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
