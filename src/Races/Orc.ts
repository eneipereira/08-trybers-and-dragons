import Race from './Race';

export default class Orc extends Race {
  static createdOrcCounter = 0;
  private OrcMaxLife = 74;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Orc.createdOrcCounter += 1;
  }

  get maxLifePoints(): number {
    return this.OrcMaxLife;
  }

  static createdRacesInstances(): number {
    return Orc.createdOrcCounter;
  }
}