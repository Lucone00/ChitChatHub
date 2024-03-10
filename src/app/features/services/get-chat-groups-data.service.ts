import { Injectable } from '@angular/core';
import { IChatList } from '../interfaces/IChatGroups.interface';

@Injectable({
  providedIn: 'root',
})
export class GetChatGroupsDataService {
  getGroups(): IChatList[] {
    return [
      {
        groupName: 'Condominio 1',
        id:1,
        chats: [
          { id: 1, chat: 'David' },
          { id: 2, chat: 'Paolo' },
        ],
      },
      {
        groupName: 'Condominio 2',
        id: 2,
        chats: [
          { id: 3, chat: 'Maria' },
          { id: 4, chat: 'Federica' },
        ],
      },
    ];
  }
}
