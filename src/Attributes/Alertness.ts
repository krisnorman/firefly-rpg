import { AttributeBase } from "./AttributeBase";
import { Die } from "../Die";

export class Alertness extends AttributeBase {
    constructor(dieType: Die) {
        super(dieType);
    }

    public get Name(): string { return "Alertness"; }
    public get Abbreviation(): string { return "Ale"; }
}