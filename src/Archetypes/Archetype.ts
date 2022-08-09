import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _cost = 0;
  private _special = 0;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  get cost(): number {
    return this._cost;
  }

  get special(): number {
    return this._special;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}