import { Height } from "./Height";
import { Hair } from "./Hair";
import { Attributes } from "./Attributes";
import { Achievement } from "./Achievement";
import { DerivedTraits } from "./DerivedTraits";
import { ISkills } from "./Skills";

export interface ICharacter {
  Name: string;
  NickName: string;
  HomeWorld: string;
  Concept: string;
  Hair: Hair;
  Eyes: string;
  Skin: string;
  Age: number;
  Height: Height;
  Other: string;
  Birthmarks: string[];
  Tattoos: string[];
  TotalWoundPoints: number;
  CurrentWoundPoints: number;
  TotalStunPoints: number;
  CurrentStunPoints: number;
  Attributes: Attributes;
  DerivedTraits: DerivedTraits;
  Achievement: Achievement;
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
  DerivedTraits: DerivedTraits;
  Achievement: Achievement;

  constructor(
    public Hair: Hair,
    public Height: Height,
    public Attributes: Attributes,
    public Skills: ISkills
  ) {
    this.DerivedTraits = new DerivedTraits(Attributes);
    this.Achievement = new Achievement();
  }
}
