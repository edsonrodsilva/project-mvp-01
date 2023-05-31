import Fastify from 'fastify'
import 'reflect-metadata'

export const fastify = Fastify({
    logger: true,
})
