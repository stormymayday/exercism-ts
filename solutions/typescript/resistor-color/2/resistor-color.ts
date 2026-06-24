export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"] as const;

export type Color = typeof COLORS[number];

export const colorCode = (val: Color): number => {
  return COLORS.indexOf(val);
}