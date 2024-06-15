export default async function remove(request, reply) {
    const Agendamento = app.mongo.db.collection('agendamentos');
    let id = request.params.id;
    await Agendamento.deleteOne({ _id: new app.mongo.ObjectId(id) });
    return reply.code(204).send();
}
