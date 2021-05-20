import { IBoardCardViewModel } from "../board-card/i-board-card.view-model";

export interface ICardListViewModel{
    Title: string;
    BoardCards: IBoardCardViewModel[];
}