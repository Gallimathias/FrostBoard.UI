import { Forum } from './forum';

export interface Group {
    Name: string;
    Description?: string;
    Order: number;
    Forums?: Forum[];
}
