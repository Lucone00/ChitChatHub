export interface IChatList {
  groupName: string;
  id: number
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