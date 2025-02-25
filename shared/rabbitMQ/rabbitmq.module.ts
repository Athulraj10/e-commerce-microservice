import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { rabbitMqConfig } from './rabbitmq.config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RABBITMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: rabbitMqConfig.urls,
          queue: 'shared_queue',  // A shared queue or service-specific queue can be used here
          queueOptions: rabbitMqConfig.queueOptions,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class RabbitMQModule {}
