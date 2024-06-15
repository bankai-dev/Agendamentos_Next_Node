export default async function create(request, reply) {
    const Agendamento = app.mongo.db.collection('agendamentos');
    let agendamento = request.body;
    await Agendamento.insertOne(agendamento);
    return reply.code(201).send();
}
