function expandedForm(num) {
  let strNum = String(num); 
  let result = [];
  for (let i = 0; i < strNum.length; i++) {
    let d = strNum[i];
    if (d !== '0') {
    let count = strNum.length - 1 - i;
    let z = "0".repeat(count);
  result.push(d + z);
  }
  }
return result.join(' + '); 
}