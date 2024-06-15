import { build, options } from './app.js';
import closeWithGrace from 'close-with-grace';

const startServer = async () => {
    const server = await build(options);

    await server.listen(options.port, options.host);
    console.log(`Server listening on ${options.host}:${options.port}`);

    closeWithGrace(async ({ signal, err }) => {
        if (err) server.log.error(`Server closing due to an error: ${err.message}`);
        else server.log.info(`${signal} signal received. Shutting down gracefully.`);

        await server.close();
    });
};

startServer().catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
});
