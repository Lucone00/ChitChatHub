export interface IChatList {
  groupName: string;
  chats: IChat[];
}

export interface IChat {
  id: number;
  chat: string;
}

export interface IMessage {
  sender: string;
  content: string;
  timestamp: Date;
}