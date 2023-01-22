let a = 10;

alert(a);

a += 10;

alert(a);

let iphoneBirthday = 2007;

alert(iphoneBirthday);

let creator = "Брендан Эйх";

alert(creator);

let room = 10;

let number = 2;

let amount = room + number;

let subtraction = room - number;

let multipiy = room * number;

let share = room / number;

alert(`${amount} ${subtraction} ${multipiy} ${share}`);

let texRoom = 2;
let texNumber = 5;
let result = texRoom ** texNumber;
alert(result);

let textA = 9;
let b = 2;
let remains = textA % b;
alert(remains);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let years = prompt("Сколько вам лет?");
alert(years);

let user = {
    name:"Gena",
    age: 30, 
    isAdmin: false
}

console.log(typeof isAdmin); 
user["city of residence"] = 'Moscow';
console.log(user["city of residence"])
user["city of residence"] = true;

console.log(user.age);

user.age = 3;

delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");

console.log(user[info]);

alert(user[info]);

let nameText = prompt('Введите ваше имя');

alert(`Привет, ${nameText}!`);






