process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});
console.log("Enter a year to get next 100 leap years:");
function main(input){
// Your code should come here
  var count, year;
  year = input;
  count = 0
  console.log("The next 100 leap years are below:");;
  while (count <= 100) {
    if(year%4 == 0) {
      console.log(year);
      count ++;
    }
    year++;
  }
process.exit();
}
