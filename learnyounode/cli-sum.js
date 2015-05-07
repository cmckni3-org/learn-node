var args = [];
process.argv.reduce(function(prev, current, i, arry){
    if (i != 1)
      args.push(current);
});
var sum = 0;
args.map(function(n){
  sum = sum + parseInt(n);
});

console.log(sum);