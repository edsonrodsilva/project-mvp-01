import { fastify } from "./app";
import { env } from "./env";

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({
      host: '0.0.0.0',
      port: env.PORT
    }).then(() => {
      console.log(`🚀 HTTP Server Running!`);
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

