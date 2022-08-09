import Race from './Race';

export default class Halfling extends Race {
  static createdHalflingCounter = 0;
  private halflingMaxLife = 60;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Halfling.createdHalflingCounter += 1;
  }

  get maxLifePoints(): number {
    return this.halflingMaxLife;
  }

  static createdRacesInstances(): number {
    return Halfling.createdHalflingCounter;
  }
}