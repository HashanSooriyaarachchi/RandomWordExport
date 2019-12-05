const { ExportRandomWords, ExportRandomWordsWithFizzBuzz, ExportRandomWordsAsync, ExportRandomWordsWithFizzBuzzAsync } = require('../Controllers/RandomWordController');

const fs = require('fs');

//Exports file with 1 - 100 random words
let fileRW = fs.createWriteStream('RandomWords.txt');
fileRW.on('error', function(err) { /* error handling */ });
ExportRandomWords().forEach(function(v) { fileRW.write(`${v}\r\n`); });
fileRW.end();

//Exports file with 1 - 100 random words with multiples of 3 being Fizz and 5 being buzz.
//For multiples of both 3 and 5 will print fizz buzz
let fileRWF = fs.createWriteStream('RandomWordsFizzBuzz.txt');
fileRWF.on('error', function(err) { /* error handling */ });
ExportRandomWordsWithFizzBuzz().forEach(function(v) { fileRWF.write(`${v}\r\n`); });
fileRWF.end();

//Exports file with 1 - 100 random words asynchronously
let fileRMA = fs.createWriteStream('RandomWordsAsync.txt');
fileRMA.on('error', function(err) { /* error handling */ });
ExportRandomWordsAsync().then(array=>{
    array.forEach(function(v) { fileRMA.write(`${v}\r\n`); });
    fileRMA.end();
});

//Exports file with 1 - 100 random words with multiples of 3 being Fizz and 5 being buzz asynchronously.
//For multiples of both 3 and 5 will print fizz buzz
let fileRMFA = fs.createWriteStream('RandomWordsFizzBuzzAsync.txt');
fileRMFA.on('error', function(err) { /* error handling */ });
ExportRandomWordsWithFizzBuzzAsync().then(arrayFizz=>{
    arrayFizz.forEach(function(v) { fileRMFA.write(`${v}\r\n`); });
    fileRMFA.end();
});


//Couldn't get the code to run in less one second for the time out
