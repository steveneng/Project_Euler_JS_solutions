var array=[];
for(i=1;i<101; i++){
  array.push(i);
}

var square=array.map(function(x){
  return Math.pow(x,2);
});

var sum=0;
var sum2=0;

for (n=0; n<square.length; n++){
  sum=sum+square[n];
  sum2=sum2+array[n];
  console.log(sum2, sum);
}

console.log(-sum+(Math.pow(sum2,2)));
