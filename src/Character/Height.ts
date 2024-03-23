
export interface IHeight {
    Feet: number;
    Inches: number;
}

export class Height implements IHeight {
    constructor(public Feet: number, public Inches: number) {}

    public toString = () : string => {
        return `${this.Feet}' ${this.Inches}" tall`;
    }
}
