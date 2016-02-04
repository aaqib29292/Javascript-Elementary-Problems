process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});
console.log("Enter a number:");
function main(input){
// Your code should come here
  var num = input;
  array = [];
  while (num>0) {
    array.push(num%10);
    num = Math.floor(num/10);
  }
  length = array.length
  for (i=0; i<=length; i++) {
    console.log(array[length-i]);
  }
process.exit();
}
