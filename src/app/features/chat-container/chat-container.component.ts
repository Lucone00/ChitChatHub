import { Component } from '@angular/core';
import { IChat, IChatList } from '../interfaces/IChatGroups.interface';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent {
  selectedGroup!: IChatList;
  selectedChat!: IChat | null;

  groups: IChatList[] = [
    {
      groupName: 'Condominio 1',
      chats: [
        { id: 1, chat: 'David' },
        { id: 2, chat: 'Paolo' },
      ],
    },
    {
      groupName: 'Condominio 2',
      chats: [
        { id: 3, chat: 'Maria' },
        { id: 4, chat: 'Federica' },
      ],
    },
  ];

  selectGroup(group: IChatList): void {
    this.selectedGroup = group;
    this.selectedChat = null;
  }

  selectChat(chat: IChat): void {
    this.selectedChat = chat;
  }
}
