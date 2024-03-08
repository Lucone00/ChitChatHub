import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent {
  selectedGroup: any;
  selectedChat: any;

  groups = [
    {
      name: 'Condominio 1',
      chats: [
        { id: 1, name: 'David' },
        { id: 2, name: 'Paolo' },
      ],
    },
    {
      name: 'Condominio 2',
      chats: [
        { id: 3, name: 'Maria' },
        { id: 4, name: 'Federica' },
      ],
    },
  ];

  selectGroup(group: any): void {
    this.selectedGroup = group;
    this.selectedChat = null;
  }

  selectChat(chat: any): void {
    this.selectedChat = chat;
  }
}
