
var lister= function(){
  var range=[];
  for(i=1; i<1000; i++){
    range.push(i);
  }
  return range;
};

var range=lister();

var sum=0;
for(i=0; i<=range.length; i++){
  if(range[i]%3===0 && range[i]%5===0){
     sum=sum+range[i];
  }
  else if(range[i]%5===0){
    sum=sum+range[i];
  }
  else if(range[i]%3===0){
    sum=sum+range[i];
  }
}

console.log(sum)
