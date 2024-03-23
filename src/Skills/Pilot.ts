import { Die } from "../Die";
import { ISkill } from "./ISkill";


export class Pilot implements ISkill {
    constructor(private _dieType: Die) { }
    roll(): number {
        return this._dieType.roll();
    }
    updateDie(newDie: Die): void {
        this._dieType = newDie;
    }

    get Die(): string { return this._dieType.name; };
}
