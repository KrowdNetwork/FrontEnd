export const arround = (number: number, numberHouses: number) => {
  const og = 10 ** numberHouses;
  return Math.trunc(number * og) / og;
};
