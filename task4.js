function order(words){
  
    let reg = /\d/;

    return words.split(" ").sort(function(a,b){
      return a.match(reg) - b.match(reg);
    }).join(' ');
  }
  
  console.log(order('is2 Thi1s T4est 3a'));