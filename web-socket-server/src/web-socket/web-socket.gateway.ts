import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ProducerService } from 'src/kafka/producer.service';
import { WebSocketService } from './web-socket.service';

@WebSocketGateway({ namespace: 'internal-socket', cors: true })
export class SendKafkaInfoGateway {
  constructor(
    private readonly webSocketService: WebSocketService,
    private readonly producerService: ProducerService,
    ) {}

  @SubscribeMessage('connection')
  connection() {
    return {value: "connected"};
  }

  @SubscribeMessage('ping')
  ping() {    
    this.producerService.send()
  }
}
