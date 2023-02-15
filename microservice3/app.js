// app.js
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import KafkaService from './service/KafkaService.js';
import socketServiceConsumer from "./service/Consumers/socketServiceConsumer.js";

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

await KafkaService.addConsumer(socketServiceConsumer);
await KafkaService.connect();   //Connecting to Kafka consumers and producer

KafkaService.producer.send({
    topic: 'microservices-running',
    messages: [
        { value: 'Microservice3 started work!' },
    ],
})
// KafkaService.disconnect(); // For disconnecting from Kafka
export default app;