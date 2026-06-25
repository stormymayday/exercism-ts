const dnaToRna: {[key: string]: string} = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export function toRna(input: string): string {
  // Edge Case: empty input (optional)
  if(input.length === 0) {
    throw new Error('Invalid input DNA.');
  }

  const res: string[] = [];

  for(let i = 0; i < input.length; i += 1) {
    const value = dnaToRna[input[i]]
    if(value === undefined) {
      throw new Error('Invalid input DNA.');
    }
    res.push(value);
  }

  return res.join("");
}
