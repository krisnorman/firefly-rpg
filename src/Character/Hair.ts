export interface IHair {
  Color: string;
  Length: string;
  Style: string;
}

export class Hair implements IHair {
  constructor(
    public Color: string,
    public Length: string,
    public Style: string
  ) {}

  public toString = (): string => {
    return `${this.Length} ${this.Color} ${this.Style} hair`;
  };
}
