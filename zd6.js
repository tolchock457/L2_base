function toWeirdCase(string){
  let words = string.split(' ');
  let result = [];
  for(let i = 0; i< words.length;i++){
    let word = words[i];
    let neww = "";
    for(let j=0; j< word.length;j++){
      if(j%2===0){
        neww+=word[j].toUpperCase();}
      else{
        neww+=word[j].toLowerCase();
      }
      }
  result.push(neww);
  }
return result.join(' ');
}