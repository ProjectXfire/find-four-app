export function newBoard(columns: number, rows: number): Array<Array<null>> {
  return new Array(columns).fill(null).map(() => new Array(rows).fill(null));
}
