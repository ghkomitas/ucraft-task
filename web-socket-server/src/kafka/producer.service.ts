import { OnApplicationShutdown } from "@nestjs/common";
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopics, Kafka, Partitioners } from "kafkajs";

export class ProducerService implements OnApplicationShutdown{
    private readonly kafka = new Kafka({
        clientId: 'microservicesInfo',
        brokers: ['localhost:9092']
    });

    private readonly producer;

    async send() {
        const producer = this.kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })

        await producer.connect()
        producer.send({
            topic: 'socketServer-ping1',
            messages: [ { value: 'Ping to microservice1' }],
        });
        producer.send({
            topic: 'socketServer-ping2',
            messages: [  { value: 'Ping to microservice2' },],
        });
        producer.send({
            topic: 'socketServer-ping3',
            messages: [  { value: 'Ping to microservice3' },],
        })
    }

    async onApplicationShutdown() {
        this.producer.disconnect();
    }
}