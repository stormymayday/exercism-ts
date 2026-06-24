export const colorCode = (val: string): number | undefined => {
  return COLORS.indexOf(val);
}

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

// export const COLORS: { [key: string]: number } = {
//   "black": 0,
//   "brown": 1,
//   "red": 2,
//   "orange": 3,
//   "yellow": 4,
//   "green": 5,
//   "blue": 6,
//   "violet": 7,
//   "grey": 8,
//   "white": 9,
// }