process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

function main(input){
// Your code should come here
var name = input;
console.log("Hello! " + name);
}
