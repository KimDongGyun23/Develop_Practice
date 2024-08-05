export interface IMessage {
  sender: string;
  text: string;
  timestamp: {
    nanoseconds: number;
    seconds: number;
  };
}
