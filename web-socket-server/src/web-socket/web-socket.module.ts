import { forwardRef, Module } from '@nestjs/common';
import { WebSocketService } from './web-socket.service';
import { SendKafkaInfoGateway } from './web-socket.gateway';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [
    forwardRef(() => KafkaModule),
  ],
  providers: [SendKafkaInfoGateway, WebSocketService],
  exports: [WebSocketService]
})
export class WebSocketModule {}
