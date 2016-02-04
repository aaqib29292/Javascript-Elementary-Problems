process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});
console.log("Enter the number to get the sum of all numbers till the number:");
function main(input){
// Your code should come here
  var sum = 0
  for(var i=0; i<=input; i++) {
    if (((i%3==0) || (i%5==0)) && (i%15 !=0)) {
      sum += i;
    }
  }
  console.log("sum of all number: " + sum);
  process.exit();
}
