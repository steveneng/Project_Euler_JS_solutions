// find the 10001 prime number

var prime= function(n){
  var counter=0;
  for(i=2; i<n; i++){
    if(n%i===0){
      counter++;
      break;
    }
  }
  if(counter===0 || n===2){
    return n
  }
}

var n=1;
var index=0;
while(index<10001){
  n++
  if(prime(n)>0){
    index++;
  }

}

console.log(n,index);
