export default async function list(request, reply) {
    const Agendamento = app.mongo.db.collection('agendamentos');
    const agendamentos = await Agendamento.find().toArray();
    return agendamentos;
}
