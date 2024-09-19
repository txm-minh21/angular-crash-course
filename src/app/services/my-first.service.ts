import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: "Txm",
      email: "txm@gmail.com",
      message: 'Hello'
    });
    this.insert({
      name: "Lily",
      email: "lily@gmail.com",
      message: 'Hello Lily'
    });
    this.insert({
      name: "Mimi",
      email: "mimi@gmail.com",
      message: 'Hello Mimi'
    });
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message)
  }

  getAllMessages() {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1)
  }
}
