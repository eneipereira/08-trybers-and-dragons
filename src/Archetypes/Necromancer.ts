import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static createdNecroCounter = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);

    Necromancer.createdNecroCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.createdNecroCounter;
  }
}