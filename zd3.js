function whatCentury(year)
{
  let num=Number(year);
  let centry = Math.ceil(num/100);
  let suffix = "th";
  let last = centry%100;
  if(last<11 || last >13){
    let lastdigit = centry%10;
    if(lastdigit===1){
      suffix = "st";
    }
    else if(lastdigit=== 2 ){
      suffix = "nd";
    }
    else if(lastdigit=== 3 ){
      suffix = "rd";
    }
  }
  return centry+suffix;
}