import { AttributeBase } from "../Attributes/AttributeBase";

export class DerivedTraitBase {
    constructor(public attribute1: AttributeBase, public attribute2: AttributeBase) {
    }

    roll(): number {
        let attr1Result = this.attribute1.roll();
        let attr2Result = this.attribute2.roll();
        let sum = attr1Result + attr2Result;
        //let logMsg = `${this.attribute1.abbreviation}(${attr1Result})+${this.attribute2.abbreviation}(${attr2Result})=${sum}`;
        //console.log(logMsg);
        return sum;
    }
}