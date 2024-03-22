import { BurstOfStrength } from "../DerivedTraits/BurstOfStrength";
import { Endurance } from "../DerivedTraits/Endurance";
import { Initiative } from "../DerivedTraits/Initiative";
import { LifePoints } from "../DerivedTraits/LifePoints";
import { LongHaul } from "../DerivedTraits/LongHaul";
import { Memorize } from "../DerivedTraits/Memorize";
import { OutOfHarmsWay } from "../DerivedTraits/OutOfHarmsWay";
import { Recall } from "../DerivedTraits/Recall";
import { Resistance } from "../DerivedTraits/Resistance";
import { IAttributes } from "./Attributes";

export interface IDerivedTraits {
    LifePoints: LifePoints;
    Initiative: Initiative;
    Endurance: Endurance;
    Resistance: Resistance;
    BurstOfStrength: BurstOfStrength;
    OutOfHarmsWay: OutOfHarmsWay;
    LongHaul: LongHaul;
    Memorize: Memorize;
    Recall: Recall;
}

export class DerivedTraits implements IDerivedTraits {
    LifePoints: LifePoints;
    Initiative: Initiative;
    Endurance: Endurance;
    Resistance: Resistance;
    BurstOfStrength: BurstOfStrength;
    OutOfHarmsWay: OutOfHarmsWay;
    LongHaul: LongHaul;
    Memorize: Memorize;
    Recall: Recall;
    
    constructor(attributes: IAttributes) {
        this.LifePoints = new LifePoints(attributes.Strength, attributes.Vitality);
        this.Initiative = new Initiative(attributes.Agility, attributes.Alertness);
        this.Endurance = new Endurance(attributes.Vitality, attributes.Willpower);
        this.Resistance = new Resistance(attributes.Vitality);
        this.BurstOfStrength = new BurstOfStrength(attributes.Strength);
        this.OutOfHarmsWay = new OutOfHarmsWay(attributes.Agility, attributes.Alertness);
        this.LongHaul = new LongHaul(attributes.Strength, attributes.Vitality);
        this.Memorize = new Memorize(attributes.Intelligence, attributes.Alertness);
        this.Recall = new Recall(attributes.Intelligence, attributes.Willpower);
    }
}