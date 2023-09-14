export interface Scorer {
    goals: number;
    assists: number;
    penalties: number;
    player: Player;
    team: Team;
}

export interface Player {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    position: string;
    shirtNumber: number | null;
    lastUpdated: string;
}

export interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: string;
}
