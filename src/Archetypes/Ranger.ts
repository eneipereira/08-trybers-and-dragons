import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static createdRangerCounter = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);

    Ranger.createdRangerCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.createdRangerCounter;
  }
}