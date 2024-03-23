import { Character } from "./Character/Character";
import { Hair } from "./Character/Hair";
import { Height } from "./Character/Height";
import { Attributes } from "./Character/Attributes";
import { Skills } from "./Character/Skills";
import { Dice } from "./Dice";

let hair = new Hair("red", "short", "strange");
let height = new Height(5, 6);
let attributes = new Attributes(Dice.d0, Dice.d6, Dice.d2, Dice.d6, Dice.d8, Dice.d6);
let skills = new Skills(
    Dice.d0, Dice.d6, Dice.d2, Dice.d6, Dice.d8, 
    Dice.d6, Dice.d2, Dice.d8, Dice.d6, Dice.d10, 
    Dice.d12, Dice.d0, Dice.d6, Dice.d10, Dice.d4, 
    Dice.d8, Dice.d10, Dice.d0, Dice.d2, Dice.d6, 
    Dice.d0, Dice.d4);

let character = new Character(hair, height, attributes, skills);
character.Name = "Bob";

console.log(character.Skills.Artistry.roll());

const alertBtn = document.querySelector('#alertBtn') as HTMLButtonElement;
const header = document.querySelector('#header') as HTMLHeadingElement

alertBtn.addEventListener('click', () => {
  header.innerHTML = `Artistry ${character.Skills.Artistry.roll()}`;
});