export interface IChatList {
  groupName: string;
  chats: IChat[];
}

export interface IChat {
  id: number;
  chat: string;
}
