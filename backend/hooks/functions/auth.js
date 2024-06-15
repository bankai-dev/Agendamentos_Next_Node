export default async function login(request, reply) {
    let user = request.body;
    request.log.info(`Login for user ${user.username}`);
    // check login details
    delete user.password;
    return {
        'x-access-token': app.jwt.sign(user)
    };
}
