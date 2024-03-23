import { Die } from "../Die";
import { ISkill } from "./ISkill";

export class AnimalHandling implements ISkill {
    constructor(private _dieType: Die){}
    
    get Die(): string {         
        return this._dieType.name; 
    }

    updateDie(newDie: Die) {
        this._dieType = newDie;
    }

    roll(): number {        
        return this._dieType.roll();
    }
}
