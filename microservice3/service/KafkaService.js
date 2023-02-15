import {Kafka, Partitioners} from "kafkajs";

class KafkaService {

    consumers = [];
    consumersInstances = [];
    producer;
    KAFKA = new Kafka({
        clientId: 'microservicesInfo',
        brokers: ['localhost:9092'],
    });

    async connect() {
        console.log('Kafka Connecting');
        this.producer = this.KAFKA.producer({createPartitioner: Partitioners.LegacyPartitioner})
        await this.producer.connect();
        for (let instance of this.consumersInstances) {
            const {consumer, topics, config} = instance
            await consumer.connect();
            await consumer.subscribe({topics});
            await consumer.run(config);
            this.consumers.push(consumer);
        }
        console.log('Kafka Connected!!!');
    }

    async addConsumer(consumerData) {
        const {topics, config, groupId = 'microservice3'} = consumerData
        const consumer = this.KAFKA.consumer({groupId})
        this.consumersInstances.push({consumer, config, topics})
    }

    disconnect() {
        console.log('Kafka Disconnecting')
        for (let consumer of this.consumers) {
            consumer.disconnect()
        }
        this.producer.disconnect()
        console.log('Kafka Disconnected!!')
    }
}

export default new KafkaService();