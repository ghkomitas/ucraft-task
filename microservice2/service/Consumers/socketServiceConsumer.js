import KafkaService from "../KafkaService.js";

export default {
    topics: ['socketServer-ping2'],
    config:{
        eachMessage: async ({ message}) => {
            await KafkaService.producer.send({
                topic: 'microservices-running',
                messages: [
                    { value: 'Microservice2 pinged!!!' },
                ],
            })
        }
    }
}