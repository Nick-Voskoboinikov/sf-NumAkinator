let minValue, maxValue, answerNumber, orderNumber, gameRun;
const orderNumberField = document.getElementById('orderNumberField');
const minValInput=document.querySelector('#startform>input[type=number]:nth-child(1)');
const maxValInput=document.querySelector('#startform>input[type=number]:nth-child(2)');
let answerField = document.getElementById('answerField');

function askQuestion(answerNumber){
const questionText=['Вы загадали число ','Да это легко! Загаданное число ','Наверное, это число '];
answerField.innerHTML=questionText[Math.round(Math.random()*2)] + '<strong>' + RussianNumber(answerNumber)  + '</strong>?';
}

function success(){
const questionText=['Я всегда угадываю<br>&#x1F60E;','Говорил же, легко!<br>&#x1F609;','Я так и думал!'];
answerField.innerHTML=questionText[Math.round(Math.random()*2)];
}

function RussianNumber(inputNumber) {
    let part1=''; // 1
    let part2=''; // 10
    let part3=''; // 100
    let sign=(inputNumber<0)?'минус':'';
    let resultingString=Math.abs(inputNumber);
    
    // 1
    if (resultingString > -1 && resultingString < 10 && resultingString % 10 === 0){
    part1 = 'ноль';
    } else if (!(resultingString > 10 &&resultingString<20) && !(resultingString% 100 > 10 &&resultingString% 100 < 20) &&resultingString% 10 === 1){
    part1 = 'один';
    } else if (!(resultingString > 10 &&resultingString<20) && !(resultingString% 100 > 10 &&resultingString% 100 < 20) &&resultingString% 10 === 2){
    part1 = 'два';
    } else if (!(resultingString > 10 &&resultingString<20) && !(resultingString% 100 > 10 &&resultingString% 100 < 20) &&resultingString% 10 === 3){
    part1 = 'три';
    } else if (!(resultingString > 10 &&resultingString<20) && !(resultingString% 100 > 10 &&resultingString% 100 < 20) &&resultingString% 10 === 4){
    part1 = 'четыре';
    } else if (!(resultingString > 10 &&resultingString<20) && !(resultingString% 100 > 10 &&resultingString% 100 < 20) &&resultingString% 10 === 5){
    part1 = 'пять';
    } else if (!(resultingString> 10 &&resultingString<20) && !(resultingString% 100 > 10 &&resultingString% 100 < 20) &&resultingString% 10 === 6){
    part1 = 'шесть';
    } else if (!(resultingString > 10 &&resultingString<20) && !(resultingString% 100 > 10 &&resultingString% 100 < 20) &&resultingString% 10 === 7){
    part1 = 'семь';
    } else if (!(resultingString > 10 &&resultingString<20) && !(resultingString% 100 > 10 &&resultingString% 100 < 20) &&resultingString% 10 === 8){
    part1 = 'восемь';
    } else if (!(resultingString > 10 &&resultingString<20) && !(resultingString% 100 > 10 &&resultingString% 100 < 20) &&resultingString% 10 === 9){
    part1 = 'девять';
    }
    
    // 10
    if (Math.trunc(resultingString% 100 / 10) === 2){
    part2 = 'двадцать';
    } else if (Math.trunc(resultingString%100/10) === 3){
    part2 = 'тридцать';
    } else if (Math.trunc(resultingString%100/10) === 4){
    part2 = 'сорок';
    } else if (Math.trunc(resultingString%100/10) === 5){
    part2 = 'пятьдесят';
    } else if (Math.trunc(resultingString%100/10) === 6){
    part2 = 'шестьдесят';
    } else if (Math.trunc(resultingString%100/10) === 7){
    part2 = 'семьдесят';
    } else if (Math.trunc(resultingString%100/10) === 8){
    part2 = 'восемьдесят';
    } else if (Math.trunc(resultingString%100/10) === 9){
    part2 = 'девяносто';
    } else if ((resultingString%100) === 10){
    part2 = 'десять';
    } else if ((resultingString%100) === 11){
    part2 = 'одиннадцать';
    } else if ((resultingString%100) === 12){
    part2 = 'двенадцать';
    } else if ((resultingString%100) === 13){
    part2 = 'тринадцать';
    } else if ((resultingString%100) === 14){
    part2 = 'четырнадцать';
    } else if ((resultingString%100) === 15){
    part2 = 'пятнадцать';
    } else if ((resultingString%100) === 16){
    part2 = 'шестнадцать';
    } else if ((resultingString%100) === 17){
    part2 = 'семнадцать';
    } else if ((resultingString%100) === 18){
    part2 = 'восемнадцать';
    } else if ((resultingString%100) === 19){
    part2 = 'девятнадцать';
    }
    
    // 1000
    if (Math.trunc (resultingString / 100) === 1){
    part3 = 'сто ';
    } else if (Math.trunc(resultingString / 100) === 2){
    part3 = 'двести ';
    } else if (Math.trunc(resultingString/  100) === 3){
    part3 = 'триста ';
    } else if (Math.trunc(resultingString / 100) === 4){
    part3 = 'четыреста';
    } else if (Math.trunc(resultingString / 100) === 5){
    part3 = 'пятьсот';
    } else if (Math.trunc(resultingString / 100) === 6){
    part3 = 'шестьсот';
    } else if (Math.trunc(resultingString / 100) === 7){
    part3 = 'семьсот';
    } else if (Math.trunc(resultingString / 100) === 8){
    part3 = 'восемьсот';
    } else if (Math.trunc(resultingString / 100) === 9){
    part3 = 'девятьсот';
    }
    
    resultingString = sign +' '+ part3 +' '+ part2 +' '+part1;
    resultingString = resultingString.replace(/\s+/g,' ').trim();
    return resultingString;
}


document.querySelector('#startform').addEventListener('submit', function (event) { 
    event.preventDefault();
    document.querySelector('dialog').close();
    minValue=parseFloat(minValInput.value) ? parseFloat(minValInput.value) : 0;
    maxValue=parseFloat(maxValInput.value) ? parseFloat(maxValInput.value) : 100;

    minValue= minValue < -999 ? -999 : minValue;
    maxValue= maxValue > 999 ? 999 : maxValue;

    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    askQuestion(answerNumber);
}, true)

document.querySelector('#btnRetry').addEventListener('click', function () { 
    document.querySelector('#startform').reset();
    document.querySelector('dialog').showModal();
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    answerField.innerText='Вы загадали число 5?';
    orderNumberField.innerText = 5;
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            askQuestion(answerNumber);
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue+1 > maxValue ){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            console.log('minValue: ' + minValue);
            console.log('maxValue было: ' + maxValue);
            maxValue = answerNumber  - 1;
            console.log('maxValue стало: ' + maxValue);
            console.log('answerNumber было: ' + answerNumber);
            answerNumber  = minValue + Math.floor((maxValue - minValue) / 2);
            console.log('answerNumber стало: ' + answerNumber);
            orderNumber++;
            console.log('orderNumber: '+orderNumber);
            console.log('__---___');
            orderNumberField.innerText = orderNumber;
            askQuestion(answerNumber);
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        success();
        gameRun = false;
    }
})


