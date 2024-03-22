// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

import { Character } from "./Character";

export interface CharacterSheetModel {
    Game:      Game;
    Player:    Player;
    Character: Character;
}

export interface AnimalHandling {
    DieType:     string;
    Specialized: AnimalHandlingSpecialized;
}

export interface AnimalHandlingSpecialized {
    Training:   string;
    Riding:     string;
    VetZoology: string;
}

export interface Artistry {
    DieType:     string;
    Specialized: ArtistrySpecialized;
}

export interface ArtistrySpecialized {
    Apprasial:   string;
    Cooking:     string;
    Forgery:     string;
    GameDesign:  string;
    Painting:    string;
    Photography: string;
    Poetry:      string;
    Sculpting:   string;
    Writing:     string;
}

export interface Athletics {
    DieType:     string;
    Specialized: AthleticsSpecialized;
}

export interface AthleticsSpecialized {
    Climbing:      string;
    Contortion:    string;
    Dodge:         string;
    Juggling:      string;
    Jumping:       string;
    Gymnastics:    string;
    Parachuting:   string;
    Parasailing:   string;
    PoleVaulting:  string;
    Riding:        string;
    Running:       string;
    Swimming:      string;
    WeightLifting: string;
}

export interface Covert {
    DieType:     string;
    Specialized: CovertSpecialized;
}

export interface CovertSpecialized {
    Camouflage:     string;
    DisableDevices: string;
    Forgery:        string;
    Infiltration:   string;
    OpenLocks:      string;
    Sabotage:       string;
    SlightOfHand:   string;
    Stealth:        string;
    Streetwise:     string;
    Surveliance:    string;
}

export interface Discipline {
    DieType:     string;
    Specialized: DisciplineSpecialized;
}

export interface DisciplineSpecialized {
    Concentration:    string;
    Interrogation:    string;
    Intimidation:     string;
    Leadership:       string;
    MentalResistance: string;
    Morale:           string;
}

export interface Guns {
    DieType:     string;
    Specialized: GunsSpecialized;
}

export interface GunsSpecialized {
    AssaultRifles:    string;
    EnergyWeapons:    string;
    GrenadeLaunchers: string;
    Gunsmithing:      string;
    MachineGuns:      string;
    Pistols:          string;
    Rifles:           string;
    Shotguns:         string;
}

export interface HeavyWeapons {
    DieType:     string;
    Specialized: HeavyWeaponsSpecialized;
}

export interface HeavyWeaponsSpecialized {
    Artillery:          string;
    Catapults:          string;
    Demolitions:        string;
    ForwardObserver:    string;
    MountedGuns:        string;
    RepairHeavyWeapons: string;
    RocketLaunchers:    string;
    ShipsCannons:       string;
    SiegeWeapons:       string;
}

export interface Influence {
    DieType:     string;
    Specialized: InfluenceSpecialized;
}

export interface InfluenceSpecialized {
    Administration: string;
    Barter:         string;
    Bureaucracy:    string;
    Conversation:   string;
    Counseling:     string;
    Interrogation:  string;
    Intimidation:   string;
    Leadership:     string;
    Marketing:      string;
    Persuasion:     string;
    Politics:       string;
    Seduction:      string;
    Streetwise:     string;
}

export interface Knowledge {
    DieType:     string;
    Specialized: KnowledgeSpecialized;
}

export interface KnowledgeSpecialized {
    Apprasial:  string;
    Cultures:   string;
    History:    string;
    Law:        string;
    Literature: string;
    Philosophy: string;
    Religion:   string;
    Sports:     string;
}

export interface Linguist {
    DieType:     string;
    Specialized: Game;
}

export interface Game {
}

export interface MechanicalEngineering {
    DieType:     string;
    Specialized: MechanicalEngineeringSpecialized;
}

export interface MechanicalEngineeringSpecialized {
    CreateMechanicalDevices:     string;
    MachineryMaintenance:        string;
    MechanicalRepairs:           string;
    FixMechanicalSecuritySystem: string;
    Plumbing:                    string;
}

export interface Player {
    Name: string;
}