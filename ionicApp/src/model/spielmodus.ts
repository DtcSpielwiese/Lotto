export class Spielmodus {

  constructor(public anzahlZahlen: number, public zahlenPool: number) {
  }

  get maxAnzahlVersuche(): number {
    return Math.floor(this.zahlenPool / this.anzahlZahlen);
  }

}
