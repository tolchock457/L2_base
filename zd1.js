function hasTwoCubeSums(n) {
	let chisla=[];
  for(let a=1;a*a*a<n;a++){
    for(let b=1;b*b*b<n;b++){
      if(a===b){
        continue;
      }
      if(a*a*a+b*b*b === n){
        let min =Math.min(a,b);
        let max= Math.max(a,b);
        let key=min +"-"+max;
        if(!chisla.includes(key)){
          chisla.push(key);
        }
        if(chisla.length===2){
          return true;
        }
        
      }
    }
  }
  return false;
}