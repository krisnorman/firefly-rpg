import { Intelligence } from "../Attributes/Intelligence";
import { Willpower } from "../Attributes/Willpower";
import { DerivedTraitBase } from "./DerivedTraitBase";

export class Recall extends DerivedTraitBase {
    constructor(intelligence: Intelligence, willpower: Willpower) {
        super(intelligence, willpower);
    }

    public get Name(): string { return "Recall"; }
}