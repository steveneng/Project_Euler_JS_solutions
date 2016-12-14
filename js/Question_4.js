// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.


var largest=0;
for (i=999; i>900; i--){
  for(j=900; j<999; j++){
    if(pal(i*j)&&pal(i*j)>largest){
      largest=i*j;
    }
  }
}

console.log(largest);

function pal(i){
  return i.toString()==i.toString().split("").reverse().join("");
}
