import { Injectable } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import { Server } from 'socket.io';

@Injectable()
@WebSocketGateway({ namespace: 'internal-socket', cors: true })
export class WebSocketService {
  @WebSocketServer()
  server: Server;
  
  send(event: string, data : any) {
    this.server.emit(event, data)
  }
}
