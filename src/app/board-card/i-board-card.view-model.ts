export interface IBoardCardViewModel {
  Id: number;
  Name: string;
  Topics: number;
  Contributions: number;
  Description?: string;
  HeaderImage?: string;
  AvatarUrl?: string;
  LastTopic?: string;
  LastUser?: string;
  LastDate?: Date;
}
