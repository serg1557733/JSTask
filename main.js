let userNumber = +prompt('Enter your number')

function sumSqrNumber(inputNumber) {

    if (isNaN(inputNumber) || inputNumber == 0 )  {
        while (isNaN(inputNumber) || inputNumber == 0 ){
        alert('It is not a number');
        inputNumber = +prompt('Enter your number');
        } 
    }
    else {
      let elemArr = []; 

        for(let i = 1; i <= inputNumber; i++){
        elemArr.push(i**2);
        }

    let elemSum = elemArr.reduce((accum, item) => {
        return accum + item;
    })
    console.log(elemSum);
    }
}
sumSqrNumber(userNumber);