import { Area } from "./area.model";
import { Season } from "./season.model";

export interface Competition {
    id: number;
    area: Area;
    name: string;
    code: string | null; 
    type: string; 
    emblem: string | null;
    plan: string; 
    currentSeason: Season;    
    numberOfAvailableSeasons: number;
    lastUpdated: string; 
}
