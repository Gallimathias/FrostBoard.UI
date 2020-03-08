import { Thread } from './thread';

export interface Forum {
    Name: string;
    Description?: string;
    Order: number;
    Threads?: Thread[];
}
