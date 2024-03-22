import { Agility } from "../Attributes/Agility";
import { Alertness } from "../Attributes/Alertness";
import { DerivedTraitBase } from "./DerivedTraitBase";

export class Initiative extends DerivedTraitBase {
    constructor(agility: Agility, alertness: Alertness) {
        super(agility, alertness);
    }

    public get Name(): string { return "Initiative"; }
}