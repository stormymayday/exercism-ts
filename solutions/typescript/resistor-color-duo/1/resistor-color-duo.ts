export const COLORS: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export function decodedValue(input: string[]): number {
  const res: number[] = [];
  for(let i = 0; i < input.length; i += 1) {
    if(COLORS.includes(input[i])) {
      res.push(COLORS.indexOf(input[i]))
    }

    if(res.length === 2) {
      break;
    }
  }
  
  return parseInt(res.join(""));
}
