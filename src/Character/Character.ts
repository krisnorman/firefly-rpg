import { IHeight } from "./Height";
import { IHair } from "./Hair";
import { IAttributes } from "./Attributes";
import { Achievement, IAchievement } from "./Achievement";
import { DerivedTraits, IDerivedTraits } from "./DerivedTraits";
import { ISkills } from "./Skills";

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
  Skills: ISkills;
}

export class Character implements ICharacter {
  Name: string = "";
  NickName: string = "";
  HomeWorld: string = "";
  Concept: string = "";
  Eyes: string = "";
  Skin: string = "";
  Age: number = 0;
  Other: string = "";
  Birthmarks: string[] = [];
  Tattoos: string[] = [];
  TotalWoundPoints: number = 0;
  CurrentWoundPoints: number = 0;
  TotalStunPoints: number = 0;
  CurrentStunPoints: number = 0;
  DerivedTraits: IDerivedTraits;
  Achievement: IAchievement;

  constructor(
    public Hair: IHair,
    public Height: IHeight,
    public Attributes: IAttributes,
    public Skills: ISkills
  ) {
    this.DerivedTraits = new DerivedTraits(Attributes);
    this.Achievement = new Achievement();
  }
}
