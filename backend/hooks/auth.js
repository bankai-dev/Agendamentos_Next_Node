@type {import('fastify').FastifyPluginAsync<>} */
import authFunction from '../functions/auth/login.js';

export default async function auth(app, options) {
    app.post('/auth', authFunction);
}
