import { Module } from '@nestjs/common';
import { InfoConsumer } from './kafka/info.consumer';
import { KafkaModule } from './kafka/kafka.module';
import { WebSocketModule } from './web-socket/web-socket.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    KafkaModule,
    WebSocketModule,
  ],
  controllers: [],
  providers: [InfoConsumer],
})
export class AppModule {}
