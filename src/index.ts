import { Die } from "./Die";
import { Character } from "./Character/Character";
import { Hair } from "./Character/Hair";
import { Height } from "./Character/Height";
import { Attributes } from "./Character/Attributes";

let d2 = new Die("d2", 2);
let d4 = new Die("d4", 4);
let d6 = new Die("d6", 6);
let d8 = new Die("d8", 8);
let d10 = new Die("d10", 10);
let d12 = new Die("d12", 12);

let hair = new Hair("red", "short", "strange");
let height = new Height();
let attributes = new Attributes(d4, d6, d2, d6, d8, d6);

let character = new Character(hair, height, attributes);

console.log(character.DerivedTraits.Initiative.roll());