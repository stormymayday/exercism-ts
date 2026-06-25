export function isLeap(year: number): boolean {
  return (
    // is divisible by 4 AND
    year % 4 === 0 && 
    // not divisible by 100
    year % 100 !== 0
  ) || 
  // OR simply divisible by 400
  year % 400 === 0; 
}