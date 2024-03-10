import { Component } from '@angular/core';
import {
  IChat,
  IChatList,
  IMessage,
} from '../interfaces/IChatGroups.interface';
import { GetChatGroupsDataService } from '../services/get-chat-groups-data.service';
import { GetMessageService } from '../services/get-message.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent {
  groups: IChatList[] = [];
  selectedGroup!: IChatList | null;
  selectedChat!: IChat | null;
  messages: IMessage[] = [];
  newMessage: string = '';

  constructor(
    private getChatService: GetChatGroupsDataService,
    private getMessageService: GetMessageService
  ) {}

  ngOnInit(): void {
    this.groups = this.getChatService.getGroups();
    this.getMessages();
  }

  getMessages(): void {
    this.getMessageService.getMessages().subscribe((messages) => {
      this.messages = messages;
    });
  }

  selectGroup(group: IChatList): void {
    this.selectedGroup = group;
    this.selectedChat = null;
  }

  selectChat(chat: IChat): void {
    this.selectedChat = chat;
  }

  goBackToGroups(): void {
    this.selectedGroup = null;
    this.selectedChat = null;
  }

  sendMessage(): void {
    if (this.newMessage.trim() !== '') {
      const newMessage: IMessage = {
        sender: 'Luca',
        content: this.newMessage,
        timestamp: new Date(),
      };

      this.getMessageService.sendMessage(newMessage);
      this.newMessage = ''; 
    }
  }
}
