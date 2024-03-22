import { Strength } from "../Attributes/Strength";
import { DerivedTraitBase } from "./DerivedTraitBase";

export class BurstOfStrength extends DerivedTraitBase {
    constructor(strength: Strength) {
        super(strength, strength);
    }

    public get Name(): string { return "BurstOfStrength"; }
}