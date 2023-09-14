import { Winner } from "./winner.model";

export interface Season {
    id: number;
    startDate: string; 
    endDate: string;   
    currentMatchday: number;
    winner: Winner | null;
}
