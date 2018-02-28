import { Spielmodus } from './spielmodus';
import { ZahlenMapping } from './zahlenMapping';
import { Runde } from './runde';

export { Spielmodus } from './spielmodus';
export { ZahlenMapping } from './zahlenMapping';
export { Runde } from './runde';


export class AdminDto {
  constructor(public spielmodus: Spielmodus, public zahlenMappings: ZahlenMapping[], public runden: Runde[]) {

  }
}
