import { Vitality } from "../Attributes/Vitality";
import { DerivedTraitBase } from "./DerivedTraitBase";

export class Resistance extends DerivedTraitBase {
    constructor(vitality: Vitality) {
        super(vitality, vitality);
    }

    public get Name(): string { return "Resistance"; }
}