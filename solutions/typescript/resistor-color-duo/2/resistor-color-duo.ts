// Creating a readonly tuple (an array that can only contain these values)
export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"] as const;

// Create a union type out of the tuple
export type Color = typeof COLORS[number];

export function decodedValue(input: Color[]): number {

  let res = -1;

  // 
  switch(input.length) {
    case 0:
      break;
    case 1:
      res = COLORS.indexOf(input[0]);
      break;
    default:
      res = COLORS.indexOf(input[0]) * 10 + COLORS.indexOf(input[1]);
      break;
  }

  return res;
}
