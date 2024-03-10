import { Component } from '@angular/core';
import { IChat, IChatList } from '../interfaces/IChatGroups.interface';
import { GetChatGroupsDataService } from '../services/get-chat-groups-data.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent {
  groups: IChatList[] = [];
  selectedGroup!: IChatList | null;
  selectedChat!: IChat | null;

  constructor(private getChatService: GetChatGroupsDataService) {}

  ngOnInit(): void {
    this.groups = this.getChatService.getGroups();
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
}
