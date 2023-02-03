//1
function min(a, b) {
    return a < b ? a : b;
    console.log(min);
}
min(5, 8);
//2

function parity(number) {
    return number % 2 === 0 ? "Число четное" : "Число нечетное";
}
console.log(parity(2));
console.log(parity(3));
//3

function calc(num) {
    let square = num * num;
    console.log(square);
}
calc(3);

function her(a) {
    return a * a;
} console.log(her(4));
//4
function printMessage() {
    const userAnswer = Number(prompt('Сколько Вам лет?'));
    if (userAnswer < 0) {
        console.log('Вы ввели неправильное значение');

    } else if (userAnswer <= 12) {

        console.log('Привет, друг!');

    } else {
        console.log('Добро пожаловать!');
    }
}
printMessage();
//5

const A = 6;
const b = 5;

function vaiues(A, b) {
    if (!isNaN(A) && !isNaN(b)) {
        return alert(A * b);
    } else {
        alert('Одно или оба значения не являются числом');
    }
}
vaiues(A, b);
//6
const userAny = Number(prompt('Введите любое число'));
console.log(userAny);
console.log(typeof (userAny));

function cub() {
    if (!isNaN(userAny)) {
        return alert(Math.pow(userAny, 3));
    } else {
        alert("не число");
    }
}
cub(userAny);


