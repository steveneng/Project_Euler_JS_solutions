// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var div= function(n){
  var array=[];
  for(i=1; i<21; i++){
    if(n%i===0){
      array.push(i);
    }
    else{
      return false;
    }
  }
  if(array.length===20){
    return n
  }
};


div(232792560);
