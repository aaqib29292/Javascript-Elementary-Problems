process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

function main(input){
// Your code should come here
  var string;
  string = input;
  stringArray = string.split(" ");
  length = stringArray.length;
  newString = [];
  for(index=0; index<length; index++) {
    word = stringArray[index].split("");
    reverseWord = word.reverse().join('');
    newString.push(reverseWord);
    // console.log(reverseWord);
  }
  result = newString.join(" ")
console.log(result);
process.exit();
}
