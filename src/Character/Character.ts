
import { IHeight } from "./Height";
import { IHair } from "./Hair";
import { IAttributes } from "./Attributes";
import { Achievement, IAchievement } from "./Achievement";
import { DerivedTraits, IDerivedTraits } from "./DerivedTraits";
//import { ISkills, Skills } from "./Skills";


export interface ICharacter {
    Name: string;
    NickName: string;
    HomeWorld: string;
    Concept: string;
    Hair: IHair;
    Eyes: string;
    Skin: string;
    Age: number;
    Height: IHeight;
    Other: string;
    Birthmarks: string[];
    Tattoos: string[];
    TotalWoundPoints: number;
    CurrentWoundPoints: number;
    TotalStunPoints: number;
    CurrentStunPoints: number;
    Attributes: IAttributes;
    DerivedTraits: IDerivedTraits;
    Achievement: IAchievement;
    //Skills: ISkills;
}

export class Character implements ICharacter {
    Name: string = "";
    NickName: string = "";
    HomeWorld: string = "";
    Concept: string = "";
    Hair: IHair;
    Eyes: string = "";
    Skin: string = "";
    Age: number = 0;
    Height: IHeight;
    Other: string = "";
    Birthmarks: string[] = [];
    Tattoos: string[] = [];
    TotalWoundPoints: number = 0;
    CurrentWoundPoints: number = 0;
    TotalStunPoints: number = 0;
    CurrentStunPoints: number = 0;
    Attributes: IAttributes;
    DerivedTraits: IDerivedTraits;
    Achievement: IAchievement;
    //Skills: ISkills;

    constructor(hair: IHair, height: IHeight, attributes: IAttributes) {
        this.Hair = hair;
        this.Height = height;
        this.Attributes = attributes;
        this.DerivedTraits = new DerivedTraits(attributes);
        //this.Skills = new Skills();
        this.Achievement = new Achievement();
    }

}
