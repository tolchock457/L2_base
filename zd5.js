function primeFactors(n){
  let result = []; let divisor = 2;
  while (n > 1) { let count = 0;
  while (n % divisor === 0) {
  n = n / divisor;
  count++;
  }
  if (count > 0) {
  if (count === 1) {
    result.push(divisor);
  } else {
    result.push(divisor + "**" + count);
  }
  }
  divisor++;
  }
  let finalString = ""; for (let i = 0; i < result.length; i++) { finalString += "(" + result[i] + ")"; }
  return finalString; 
}