export interface UserData {
  id: number;
  title: string;
  ik: string;
  author: string;
}

export interface Attachment {
  id: number;
  userdata: UserData;
  key: string;
  url: string;
}
