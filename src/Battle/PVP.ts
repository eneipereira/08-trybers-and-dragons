import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private playerA: Fighter, private _playerB: Fighter) {
    super(playerA);
  }

  fight(): number {
    while (this.playerA.lifePoints > -1 && this._playerB.lifePoints > -1) {
      this.playerA.attack(this._playerB);
      this._playerB.attack(this.playerA);
    }

    return super.fight();
  }
}