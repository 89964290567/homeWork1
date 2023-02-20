//1
 numbers = [3, 4, 1, 9];
function getResult(array,callback) {
    return callback(array);
}
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];  
    }
    return sum;
}
function mult(array) {
    let mult = 1;
    for (let i = 0; i < array.length; i++) {
        mult *= array[i];
    }
    return mult;
}
getResult(numbers,mult);


//2

function compareNum(a, b) { // сравниваем числа
    return a - b;
}
function compareUser(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
}
function sort(arr, compareFunction) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) { // ввели переменную condition, которая будет проверяет
            // передана callback-функция и тогда сохраняет результат её вызова
            // если не передана, то выполняет условие по умолчанию
            const condition = compareFunction // если этот параметр не будет передан то здесь будет undefined, т.е. ложь(false)
                ? compareFunction(arr[i], arr[j]) > 0 // в callback функцию мы можем передать сколько угодно параметров, но они должны находится в пределах функции
                : arr[i].toString() > arr[j].toString(); // условие по умолчанию
            if (condition) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];
users.sort(compareUser);
console.log(users);

//3
const arr = [1, '4', false, 9, 'two'];
function each(array, callback) {
    return callback(array); 
}
function reversArr(array) {
    return array.reverse();
}
function toNumberArr(array) {
    const newArr = [];
    array.forEach((element) => {
      if (!isNaN(element)) {
        newArr.push(Number(element))
      }  
    });
    return newArr;
}
each(arr, reversArr);
each(arr, toNumberArr);

//4
let nDate = new Date();

// повторить с интервалом 3 секунды
let timerId = setInterval(() => alert (nDate), 3000);


// остановить вывод через 30 секунд
setTimeout(() => { clearInterval(timerId); alert('30 секунд прошло'); }, 30000);

//5
function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback()
    }, 1000);}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);
//talk();

