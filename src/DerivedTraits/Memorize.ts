import { Alertness } from "../Attributes/Alertness";
import { Intelligence } from "../Attributes/Intelligence";
import { DerivedTraitBase } from "./DerivedTraitBase";

export class Memorize extends DerivedTraitBase {
  constructor(intelligence: Intelligence, alertness: Alertness) {
    super(intelligence, alertness);
  }

  public get Name(): string { return "Memorize"; }
}
