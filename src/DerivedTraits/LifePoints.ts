import { Strength } from "../Attributes/Strength";
import { Vitality } from "../Attributes/Vitality";
import { DerivedTraitBase } from "./DerivedTraitBase";

export class LifePoints extends DerivedTraitBase {
    constructor(strength: Strength, vitality: Vitality) {
        super(strength, vitality);
    }

    public get Name(): string { return "LifePoints"; }
}