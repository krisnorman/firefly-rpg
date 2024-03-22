import { AttributeBase } from "./AttributeBase";
import { Die } from "../Die";

export class Vitality extends AttributeBase {
    constructor(dieType: Die) {
        super(dieType);
    }

    public get Name(): string { return "Vitality"; }
    public get Abbreviation(): string { return "Vit"; }
}