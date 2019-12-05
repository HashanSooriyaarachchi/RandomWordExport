const { getRandomWordSync, getRandomWord } = require('word-maker');

function ExportRandomWords() {
    const RandomWordArray = [];
    for(let i = 1; i<=100;i++){
        try {
            RandomWordArray.push(i + ': ' + getRandomWordSync({ withErrors: true }));
        }catch (e) {
            RandomWordArray.push(i + ': ' + 'It shouldn\'t break anything!');
        }
    }
    return RandomWordArray;
}

function ExportRandomWordsWithFizzBuzz() {
    const RandomWordArray = [];

    for(let i = 1; i<=100;i++) {
        try {
            if (i % 3 == 0 && i % 5 == 0) {
                RandomWordArray.push(i + ': Fizz Buzz')
            } else if (i % 3 == 0) {
                RandomWordArray.push(i + ': Fizz')
            } else if (i % 5 == 0) {
                RandomWordArray.push(i + ': Buzz')
            } else {
                RandomWordArray.push(i + ': ' + getRandomWordSync({ withErrors: true }))
            }
        } catch (e) {
            RandomWordArray.push(i + ': ' + 'It shouldn\'t break anything!');
        }
    }

    return RandomWordArray;
}



async function ExportRandomWordsAsync() {
    const RandomWordArray= [];
    for (let i = 1; i <= 100; i++) {
       await getRandomWord({ withErrors: true }).then(randomWord => {
            RandomWordArray.push(i +  ': ' + randomWord)
        }).catch(err =>{
            RandomWordArray.push(i +  ': ' + 'It shouldn\'t break anything!')
        });
    }
    return RandomWordArray;
}

async function ExportRandomWordsWithFizzBuzzAsync() {
    const RandomWordArray= [];

    for(let i = 1; i<=100;i++){
        if(i%3 == 0 && i%5 == 0) {
            RandomWordArray.push(i +  ': Fizz Buzz')
        }
        else if(i%3 == 0){
            RandomWordArray.push(i +  ': Fizz')
        }
        else if(i%5 == 0)
        {
            RandomWordArray.push(i +  ': Buzz')
        }
        else
        {
            await getRandomWord({ withErrors: true }).then(randomWord => {
                RandomWordArray.push(i +  ': ' + randomWord)
            }).catch(err =>{
                RandomWordArray.push(i +  ': ' + 'It shouldn\'t break anything!')
            });;
        }
    }

    return RandomWordArray;
}

module.exports = {ExportRandomWords,ExportRandomWordsWithFizzBuzz, ExportRandomWordsAsync, ExportRandomWordsWithFizzBuzzAsync}
