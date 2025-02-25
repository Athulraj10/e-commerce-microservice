// src/config/rabbitmq.config.ts

export const RABBITMQ_HOST = "localhost";
export const RABBITMQ_PORT = 5672;
export const RABBITMQ_USER = "guest";
export const RABBITMQ_PASSWORD = "guest";

export const rabbitMqConfig = {
  urls: [`amqp://${RABBITMQ_USER}:${RABBITMQ_PASSWORD}@${RABBITMQ_HOST}:${RABBITMQ_PORT}`],
  queueOptions: {
    durable: false,
  },
};
