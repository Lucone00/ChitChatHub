import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IMessage } from '../interfaces/IChatGroups.interface';

@Injectable({
  providedIn: 'root',
})
export class GetMessageService {
  private messages: IMessage[] = [
    { sender: 'David', content: 'Buongiorno vicini!', timestamp: new Date() },
    {
      sender: 'Paolo',
      content:
        'Ciao a tutti, oggi deve arrivarmi un pacco ma sarò fuori casa, qualcuno può aiutarmi?',
      timestamp: new Date(),
    },
  ];

  private messagesSubject = new BehaviorSubject<IMessage[]>(this.messages);

  getMessages(): Observable<IMessage[]> {
    return of(this.messages);
  }

  sendMessage(message: IMessage): void {
    this.messages.push(message);
    this.messagesSubject.next(this.messages);
  }
}
