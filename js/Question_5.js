// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var cM= function(x){
  for(i=1; i<x; i++){
    if(x%i===0){
      x/=i;
    }
  }
  return x
}

var g=1;

for(n=1; n<21; n++){
  if(g%n!==0){
  g=g*cM(n);}
  console.log(cM(n),n,g)
}
