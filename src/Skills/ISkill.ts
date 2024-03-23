import { Die } from "../Die";


export interface ISkill {
    roll(): number;
    updateDie(newDie: Die): void;
    Die: string;
}
