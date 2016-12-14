// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

var value=600851475143;
var i= 3;
while(i<value){
  if(600851475143%i===0){
    value=value/i;
  }
  i++
}

console.log(value);
