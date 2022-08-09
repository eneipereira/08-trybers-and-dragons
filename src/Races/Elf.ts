import Race from './Race';

export default class Elf extends Race {
  static createdElfCounter = 0;
  private elfMaxLife = 99;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Elf.createdElfCounter += 1;
  }

  get maxLifePoints(): number {
    return this.elfMaxLife;
  }

  static createdRacesInstances(): number {
    return Elf.createdElfCounter;
  }
}