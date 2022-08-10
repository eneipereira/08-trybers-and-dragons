import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player: Fighter, private _monsters: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    for (let index = 0; index < this._monsters.length; index += 1) {
      while (
        this.player.lifePoints > -1 && this._monsters[index].lifePoints > -1
      ) {
        this.player.attack(this._monsters[index]);
        this._monsters[index].attack(this.player);
      }
    }
    return super.fight();
  }
}