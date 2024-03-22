import { Agility } from "../Attributes/Agility";
import { Alertness } from "../Attributes/Alertness";
import { Intelligence } from "../Attributes/Intelligence";
import { Strength } from "../Attributes/Strength";
import { Vitality } from "../Attributes/Vitality";
import { Willpower } from "../Attributes/Willpower";
import { Die } from "../Die";



export interface IAttributes {
    Strength: Strength;
    Agility: Agility;
    Vitality: Vitality;
    Alertness: Alertness;
    Intelligence: Intelligence;
    Willpower: Willpower;
}

export class Attributes implements IAttributes {
    Strength: Strength;
    Agility: Agility;
    Vitality: Vitality;
    Alertness: Alertness;
    Intelligence: Intelligence;
    Willpower: Willpower;

    constructor(strDie: Die, agiDie: Die, vitDie: Die, aleDie: Die, intDie: Die, wilDie: Die) {
        this.Strength = new Strength(strDie);
        this.Agility = new Agility(agiDie);
        this.Vitality = new Vitality(vitDie);
        this.Alertness = new Alertness(aleDie);
        this.Intelligence = new Intelligence(intDie);
        this.Willpower = new Willpower(wilDie);
    }
}