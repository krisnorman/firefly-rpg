import { MechanicalEngineering } from "../Skills/MechanicalEngineering";
import { Linguist } from "../Skills/Linguist";
import { Knowledge } from "../Skills/Knowledge";
import { Influence } from "../Skills/Influence";
import { HeavyWeapons } from "../Skills/HeavyWeapons";
import { Guns } from "../Skills/Guns";
import { Discipline } from "../Skills/Discipline";
import { Covert } from "../Skills/Covert";
import { Athletics } from "../Skills/Athletics";
import { Artistry } from "../Skills/Artistry";
import { AnimalHandling } from "../Skills/AnimalHandling";
import { Die } from "../Die";
import { ISkill } from "../Skills/ISkill";
import { MedicalExpertise } from "../Skills/MedicalExpertise";
import { MeleeWeaponCombat } from "../Skills/MeleeWeaponCombat";
import { Perception } from "../Skills/Perception";
import { Performance } from "../Skills/Performance";
import { Pilot } from "../Skills/Pilot";
import { PlanetaryVehicles } from "../Skills/PlanetaryVehicles";
import { RangedWeapons } from "../Skills/RangedWeapons";
import { ScientificExpertise } from "../Skills/ScientificExpertise";
import { Survival } from "../Skills/Survival";
import { TechnicalEngineering } from "../Skills/TechnicalEngineering";
import { UnarmedCombat } from "../Skills/UnarmedCombat";

export interface ISkills {
  AnimalHandling: ISkill;
  Artistry: ISkill;
  Athletics: ISkill;
  Covert: ISkill;
  Discipline: ISkill;
  Guns: ISkill;
  HeavyWeapons: ISkill;
  Influence: ISkill;
  Knowledge: ISkill;
  Linguist: ISkill;
  MechanicalEngineering: ISkill;
  MedicalExpertise: ISkill;
  MeleeWeaponCombat: ISkill;
  Perception: ISkill;
  Performance: ISkill;
  Pilot: ISkill;
  PlanetaryVehicles: ISkill;
  RangedWeapons: ISkill;
  ScientificExpertise: ISkill;
  Survival: ISkill;
  TechnicalEngineering: ISkill;
  UnarmedCombat: ISkill;
}

export class Skills implements ISkills {
  AnimalHandling: ISkill;
  Artistry: ISkill;
  Athletics: ISkill;
  Covert: ISkill;
  Discipline: ISkill;
  Guns: ISkill;
  HeavyWeapons: ISkill;
  Influence: ISkill;
  Knowledge: ISkill;
  Linguist: ISkill;
  MechanicalEngineering: ISkill;
  MedicalExpertise: ISkill;
  MeleeWeaponCombat: ISkill;
  Perception: ISkill;
  Performance: ISkill;
  Pilot: ISkill;
  PlanetaryVehicles: ISkill;
  RangedWeapons: ISkill;
  ScientificExpertise: ISkill;
  Survival: ISkill;
  TechnicalEngineering: ISkill;
  UnarmedCombat: ISkill;

  constructor(
    animalHandling: Die,
    artistry: Die,
    athletics: Die,
    covert: Die,
    discipline: Die,
    guns: Die,
    heavyWeapons: Die,
    influence: Die,
    knowledge: Die,
    linguist: Die,
    mechanicalEngineering: Die,
    medicalExpertise: Die,
    meleeWeaponCombat: Die,
    perception: Die,
    performance: Die,
    pilot: Die,
    planetaryVehicles: Die,
    rangedWeapons: Die,
    scientificExpertise: Die,
    survival: Die,
    technicalEngineering: Die,
    unarmedCombat: Die
  ) {
    this.AnimalHandling = new AnimalHandling(animalHandling);
    this.Artistry = new Artistry(artistry);
    this.Athletics = new Athletics(athletics);
    this.Covert = new Covert(covert);
    this.Discipline = new Discipline(discipline);
    this.Guns = new Guns(guns);
    this.HeavyWeapons = new HeavyWeapons(heavyWeapons);
    this.Influence = new Influence(influence);
    this.Knowledge = new Knowledge(knowledge);
    this.Linguist = new Linguist(linguist);
    this.MechanicalEngineering = new MechanicalEngineering(mechanicalEngineering);
    this.MedicalExpertise = new MedicalExpertise(medicalExpertise);
    this.MeleeWeaponCombat = new MeleeWeaponCombat(meleeWeaponCombat);
    this.Perception = new Perception(perception);
    this.Performance = new Performance(performance);
    this.Pilot = new Pilot(pilot);
    this.PlanetaryVehicles = new PlanetaryVehicles(planetaryVehicles);
    this.RangedWeapons = new RangedWeapons(rangedWeapons);
    this.ScientificExpertise = new ScientificExpertise(scientificExpertise);
    this.Survival = new Survival(survival);
    this.TechnicalEngineering = new TechnicalEngineering(technicalEngineering);
    this.UnarmedCombat = new UnarmedCombat(unarmedCombat);
  }
}
