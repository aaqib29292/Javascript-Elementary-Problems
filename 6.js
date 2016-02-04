process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});
console.log("Enter the number to get its multipication table of that number upto 12:");
function main(input){
// Your code should come here
  var num = input, count = 0, i;
  for (i=1; i<=12; i++) {
    product = num*i;
    console.log(num+"X"+i+"= "product);
  }
  process.exit();
}
