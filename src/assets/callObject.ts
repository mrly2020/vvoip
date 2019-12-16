export interface CallObject{
  caller: number;
  target: number;

  contactKey: String;
  date: Date;
  startTime: String;
  endTime: String;

  name: String;
  myContact: boolean;

  missed: Boolean;
}
