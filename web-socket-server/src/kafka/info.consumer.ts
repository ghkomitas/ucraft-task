import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConsumerService } from "./consumer.service";
import { WebSocketService } from "../web-socket/web-socket.service";

@Injectable()
export class InfoConsumer implements OnModuleInit{
    constructor(
        private readonly consumerService: ConsumerService,
        private readonly webSocketService: WebSocketService
        ) {}

    onModuleInit() {
        this.consumerService.consume(
            { topics: ['microservices-running']},
            {
                eachMessage: async ({ message}) => {
                    this.webSocketService.send('info-microservices', {
                        value: message.value.toString()
                    })
                }
            }
        )        
    }
}