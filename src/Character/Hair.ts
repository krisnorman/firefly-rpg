
export interface IHair {
    Color: string;
    Length: string;
    Style: string;
}

export class Hair implements IHair {
    Color: string;
    Length: string;
    Style: string;

    constructor(color: string, length: string, style: string) {
        this.Color = color;
        this.Length = length;
        this.Style = style;
    }
}