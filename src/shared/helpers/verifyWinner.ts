export function fourInLine(
  array: Array<Array<string | null>>,
  val: string,
  pos: number[]
): Promise<number[]> {
  const hPromise = new Promise((resolve, reject) => {
    const counter = countHorizontal(array, val, pos);
    resolve(counter);
  });
  const vPromise = new Promise((resolve, reject) => {
    const counter = countVertical(array, val, pos);
    resolve(counter);
  });
  const d1Promise = new Promise((resolve, reject) => {
    const counter = countDiagonal1(array, val, pos);
    resolve(counter);
  });
  const d2Promise = new Promise((resolve, reject) => {
    const counter = countDiagonal2(array, val, pos);
    resolve(counter);
  });
  return Promise.all([hPromise, vPromise, d1Promise, d2Promise]) as Promise<
    number[]
  >;
}

function countHorizontal(
  array: Array<Array<string | null>>,
  val: string,
  pos: number[]
) {
  let counter = 1;
  let posL = [...pos];
  let posR = [...pos];
  while (array[posL[0] - 1] && array[posL[0] - 1][posL[1]] === val) {
    counter++;
    posL = [posL[0] - 1, posL[1]];
  }
  while (array[posR[0] + 1] && array[posR[0] + 1][posR[1]] === val) {
    counter++;
    posR = [posR[0] + 1, posR[1]];
  }
  return counter;
}

function countVertical(
  array: Array<Array<string | null>>,
  val: string,
  pos: number[]
) {
  let counter = 1;
  let posT = [...pos];
  let posB = [...pos];
  while (array[posT[0]][posT[1] - 1] === val) {
    counter++;
    posT = [posT[0], posT[1] - 1];
  }
  while (array[posB[0]][posB[1] + 1] === val) {
    counter++;
    posB = [posB[0], posB[1] + 1];
  }
  return counter;
}

function countDiagonal1(
  array: Array<Array<string | null>>,
  val: string,
  pos: number[]
) {
  let counter = 1;
  let posTR: number[] = [...pos];
  let posBL: number[] = [...pos];
  while (array[posTR[0] + 1] && array[posTR[0] + 1][posTR[1] - 1] === val) {
    counter++;
    posTR = [posTR[0] + 1, posTR[1] - 1];
  }
  while (array[posBL[0] - 1] && array[posBL[0] - 1][posBL[1] + 1] === val) {
    counter++;
    posBL = [posBL[0] - 1, posBL[1] + 1];
  }
  return counter;
}

function countDiagonal2(
  array: Array<Array<string | null>>,
  val: string,
  pos: number[]
) {
  let counter = 1;
  let posTL = [...pos];
  let posBR = [...pos];
  while (array[posTL[0] - 1] && array[posTL[0] - 1][posTL[1] - 1] === val) {
    counter++;
    posTL = [posTL[0] - 1, posTL[1] - 1];
  }
  while (array[posBR[0] + 1] && array[posBR[0] + 1][posBR[1] + 1] === val) {
    counter++;
    posBR = [posBR[0] + 1, posBR[1] + 1];
  }
  return counter;
}
