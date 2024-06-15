export default async function update(request, reply) {
    const Agendamento = app.mongo.db.collection('agendamentos');
    let id = request.params.id;
    let agendamento = request.body;
    await Agendamento.updateOne({ _id: new app.mongo.ObjectId(id) }, { $set: agendamento });
    return reply.code(204).send();
}
