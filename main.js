

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
    console.log(`For first task - summ of sqrt : ${elemSum}`);
    }
}
sumSqrNumber(userNumber);

//Есть массив [3, 5, 12, 9, 23, 93, 17]
//Отфильтровать его так, чтобы остались только те числа, которые больше 2 и меньше 20. И потом получить их сумму.

let arrNumbers = [3, 5, 12, 9, 23, 93, 17];

let outputArray = arrNumbers.filter(num => (2 < num && num < 20)).reduce((accum, summ) => accum + summ);

console.log(`Second task summ after filter:  ${outputArray}`);

//Дан массив [[1, 6, 3, '6'], [10, 15, 13, '10']]. Найти сумму элементов, которые являются числами и которые кратны двум

let arrayOfArrays = [[1, 6, 3, '6'], [10, 15, 13, '10']];

function summOfElements(array){
    let summ = 0;
    for (item of array) {
        let firstSumms = item.filter(num => typeof(num) === 'number' && num % 2 == 0).reduce((accum, summ) => accum + summ);
        summ +=firstSumms;    
    } 
    console.log(`Third task summ of array :  ${summ}`)
}
summOfElements(arrayOfArrays);
//Написать функцию, которая устанавливает новые свойства в объект.
/* Функция принимает в себя 3 аргумента - key, value, obj
key - свойство, которое хотим добавить. Принимаем это от юзера.
value - значение свойства. Принимаем это от юзера.
obj - объект, в который хотим добавить новое свойство.
Если юзер ввел ключ, который уже есть в объекте, то выводим сообщение - "Уже есть", если ключа нет, то устанавливаем его в объект. */

function objProperties(key, value, obj) {
        this.key = key;
        this. value = value; 
        for (let key in obj) {
            if (this.key === key) {
                alert(" TEST Уже есть");
            }     
        }  
        obj[this.key] = this.value;
        return obj;   
}

let user = new objProperties('name','Serg', {'age': 36});

console.log(user); //new obj with added fields

let userTwo = new objProperties('name', 'Serg', {'name':'Serg'}); //testing add field

console.log(objProperties('age', 5, {'Pet': 'cat'}));

