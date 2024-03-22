import { Vitality } from "../Attributes/Vitality";
import { Willpower } from "../Attributes/Willpower";
import { DerivedTraitBase } from "./DerivedTraitBase";

export class Endurance extends DerivedTraitBase {
    constructor(vitality: Vitality, willpower: Willpower) {
        super(vitality, willpower);
    }

    public get Name(): string { return "Endurance"; }
}