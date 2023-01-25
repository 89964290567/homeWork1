//1
let password = "Пароль";
let input = prompt("Введите пароль");
if (input === true) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

//2
let C = 3;
if (C > 0 && C < 10) {
    console.log("Верно");

} else {
    console.log("Неверно");
}

//3
let D = 1;
let E = 200;
if (D || E > 100) {
    console.log("Верно");

} else {
    console.log("Неверно");

}

//4
let a = 2;
let b = 3;
alert(a + b);

//5
let monthNumber = 12;
switch (monthNumber) {
    case "1":
        console.log("зима")
        break;
    case "2":
        console.log("зима")
        break;
    case "3":
        console.log("весна")
        break;
    case 4:
        console.log("весна")
        break;
    case 5:
        console.log("весна")
        break;
    case 6:
        console.log("лето")
        break;
    case 7:
        console.log("лето")
        break;
    case 8:
        console.log("лето")
        break;
    case 9:
        console.log("осень")
        break;
    case 10:
        console.log("осень")
        break;
    case 11:
        console.log("осень")
        break;
    case 12:
        console.log("зима")
        break;

    default: console.log('нету')
        break;
}
//7
let please = prompt("Пожалуйста, введите любое число");
console.log(isNaN(please));
let pleaseH = prompt("Пожалуйста, введите любое число");
if (pleaseH % 2 == 0) {
    alert("Число четное");
} else {
    alert("Число нечетное");
}

//8


let system = prompt("У вас iOS или Android?");
if (system === "iOS") {
    alert("Установите версию приложения для iOS по ссылке");
} else if (system === "Android") {
    alert("Установите версию приложения для Android по ссылке");
}

//9

let clienTOS = prompt("У вас iOS или Android?");
let clientDeviceYear = prompt("Когда произведен?");
if (clienTOS === "iOS" && clientDeviceYear > 2014) {
    alert("Установите версию приложения для iOS по ссылке");
} else if (clienTOS === "Android" && clientDeviceYear > 2014) {
    alert("Установите версию приложения для Android по ссылке");
}

if (clienTOS === "iOS" && clientDeviceYear < 2015) {
    alert("Установите облегченную версию приложения для iOS по ссылке");
} else if (clienTOS === "Android" && clientDeviceYear < 2015){
    alert("Установите облегченную версию приложения для Android по ссылке");
}




