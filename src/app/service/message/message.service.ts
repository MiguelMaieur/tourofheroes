import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private _messages : Array<string> = [];

  constructor() {}

  add(message : string){
    this._messages.push(message);
  }

  clear(){
    this._messages = [];
  }

  get messages():Array<string>{
    return this._messages;
  }
}
