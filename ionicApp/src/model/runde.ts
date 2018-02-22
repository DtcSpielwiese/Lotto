
export class Runde {
  constructor(public zahlen: number[], public timestamp: string) {  }

  get gezogeneZahlen(): string {
    return this.zahlen.join(", ");
  }

}
