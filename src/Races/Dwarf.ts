import Race from './Race';

export default class Dwarf extends Race {
  static createdDwarfCounter = 0;
  private dwarfMaxLife = 80;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Dwarf.createdDwarfCounter += 1;
  }

  get maxLifePoints(): number {
    return this.dwarfMaxLife;
  }

  static createdRacesInstances(): number {
    return Dwarf.createdDwarfCounter;
  }
}