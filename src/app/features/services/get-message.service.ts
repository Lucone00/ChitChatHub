import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMessage } from '../interfaces/IChatGroups.interface';

@Injectable({
  providedIn: 'root',
})
export class GetMessageService {
  constructor() {}

  private messages: IMessage[] = [
    { sender: 'David', content: 'Buongiorno vicini!', timestamp: new Date() },
    {
      sender: 'Paolo',
      content:
        'Ciao a tutti, oggi deve arrivarmi un pacco ma sarò fuori casa, qualcuno può aiutarmi?',
      timestamp: new Date(),
    },
  ];

  getMessages(): Observable<IMessage[]> {
    return of(this.messages);
  }
}
