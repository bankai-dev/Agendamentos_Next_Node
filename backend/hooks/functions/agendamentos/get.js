export default async function get(request, reply) {
    const Agendamento = app.mongo.db.collection('agendamentos');
    let id = request.params.id;
    let agendamento = await Agendamento.findOne({ _id: new app.mongo.ObjectId(id) });
    return agendamento;
}
