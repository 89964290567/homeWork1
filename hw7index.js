//1
const answer = "js";
console.log(answer.toUpperCase());

//2

const products = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = 'ко';

products.forEach((product) => {
    if (product.toLowerCase().includes(search.toLowerCase())) {
        console.log(product);
    }
});

//3
//=> 33 До большего целого 
Math.ceil(32.58884);

//=> 32 До меньшего целого
Math.floor(32.58884);

//До ближайшего
Math.round(32.58884);

//4
Math.max(52, 53, 49, 77, 21, 32);
console.log(Math.max(52, 53, 49, 77, 21, 32));

Math.min(52, 53, 49, 77, 21, 32);
console.log(Math.min(52, 53, 49, 77, 21, 32));

//5
function getRandomInt(minValue, maxValue) {
    return Math.floor(Math.random() * (minValue - maxValue) + maxValue);
}
console.log(getRandomInt(1, 10));

//6

function getRandomNumbers (num) {
    
    const arr2 = Array.from({length: num / 2}, () => Math.round(Math.random() * (num - 0)) + 0);
    console.log(arr2); 
}

getRandomNumbers (21);


//7
function casually(minValue1, maxValue2) {
    Math.round(casually);
    return Math.floor(Math.random() * (minValue1 - maxValue2) + maxValue2);
}
console.log(casually(2, 12));

//8,9
let currentDate = new Date();
currentDate.setDate(73);
let day = currentDate.getDate();
console.log(day);

//10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() +
    " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() +
    ", " + days[myDate.getDay()];

console.log(fullDate);

//11
function storage () {

    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let beginning = prompt("Чему равнялся первый элемент массива?");
    let end = prompt("Чему равнялся последний элемент массива?");

    if (beginning.toLowerCase() == fruits[0].toLocaleLowerCase() && end.toLowerCase() == fruits[fruits.length-1].toLocaleLowerCase()) {
        alert("Молодец, угадал!");
    } else if (beginning.toLowerCase() == fruits[0].toLocaleLowerCase() || end.toLowerCase() == fruits[fruits.length-1].toLocaleLowerCase()) {
        alert("Вы были близки к победе!");
    } else {
        alert("не угадал");
}}
