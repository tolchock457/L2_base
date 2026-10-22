function solution(str){
   if(str.length % 2 !== 0){
     str = str + '_';
   }
  let result = [];
  for (let i = 0; i< str.length;i+=2){
    let p = str.slice(i,i+2);
    result.push(p);
  }
  retu
}