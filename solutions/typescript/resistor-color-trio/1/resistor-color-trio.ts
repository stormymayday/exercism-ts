export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"] as const;

type Color = typeof COLORS[number];

export function decodedResistorValue([color1, color2, color3]: Color[]): string {

  let suffix = 'ohms';
  let numZeros = 0;
  
  const val1 = COLORS.indexOf(color1);
  const val2 = COLORS.indexOf(color2);
  let val3 = COLORS.indexOf(color3);

  const res: number[] = [];
  
  if(val1 !== 0) {
    res.push(val1);
  }
  
  if(val2 === 0) {
    numZeros += 1;
  }
  res.push(val2);

  // Edge Case: first and second values are zeroes
  if(res[0] === 0) {
    return `0 ohms`;
  }
  
  while(val3 > 0) {
    res.push(0);
    numZeros += 1;
    val3 -=1;
  }

  switch(true) {
    case numZeros >= 9:
      suffix = 'gigaohms';
      for(let i = 9; i > 0; i -= 1) {
        res.pop();
      }
      break;
    case numZeros >= 6:
      suffix = 'megaohms';
      for(let i = 6; i > 0; i -= 1) {
        res.pop();
      }
      break;
    case numZeros >= 3:
      suffix = 'kiloohms';
      for(let i = 3; i > 0; i -= 1) {
        res.pop();
      }
      break;
    default:
      break;
  }
  
  return `${res.join("")} ${suffix}`;
  
}
