export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"] as const;

type Color = typeof COLORS[number];

export function decodedResistorValue([color1, color2, color3]: Color[]): string {

  let suffix: 'ohms' | 'kiloohms' | 'megaohms' | 'gigaohms' = 'ohms';
  const val1 = COLORS.indexOf(color1);
  const val2 = COLORS.indexOf(color2);
  const val3 = COLORS.indexOf(color3);

  let res: number = (val1 * 10 + val2) * Math.pow(10, val3);

  if(res >= 1000_000_000) {
    res = res / 1000_000_000;
    suffix = 'gigaohms';
  } else if(res >= 1000_000) {
    res = res / 1000_000;
    suffix = 'megaohms';
  } else if(res >= 1000) {
    res = res / 1000;
    suffix = 'kiloohms';
  }
  
  return `${res} ${suffix}`;
  
}
