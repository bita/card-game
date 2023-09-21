export function getRandomInt(max: number, min: number){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomPosNegInt() {
  return Math.random() - 0.5;
}
