import { Die } from "../Die";
import { Roller } from "../Roller";

export class AttributeBase {
    constructor(public dieType: Die) {};

    public roll(): number {
        return Roller.roll(this.dieType.sides);
    }
}