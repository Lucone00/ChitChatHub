import { Component } from '@angular/core';
import {
  IChat,
  IChatList,
  IMessage,
} from '../interfaces/IChatGroups.interface';
import { GetChatGroupsDataService } from '../services/get-chat-groups-data.service';
import { GetMessageService } from '../services/get-message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
    private getMessageService: GetMessageService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
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
    this.updateUrl(['chatlist', group.id.toString()]);
  }

  selectChat(chat: IChat): void {
    this.selectedChat = chat;
    this.updateUrl(['chatlist', (this.selectedGroup?.id || '').toString(), 'chat', chat.id.toString()]);
  }

  goBackToGroups(): void {
    this.selectedGroup = null;
    this.selectedChat = null;
    this.location.back();
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

  private updateUrl(segments: string[]): void {
    this.location.go(this.router.createUrlTree(segments, { relativeTo: this.route }).toString());
  }
}
