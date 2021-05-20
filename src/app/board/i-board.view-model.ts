import { ICardListViewModel } from "../card-list/i-card-list.view-model";

export interface IBoardViewModel{ 
    Id: number;
    CardLists: ICardListViewModel[];
}