let I = 0;

while (I < 2) {
    console.log("Привет");
    I++;
}
//2
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
//3
let no = 7;
while (no <= 22) {
    console.log(no);
    no++;
}
//4

let obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
};
for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]}долларов.`);

}

//5
let n = 1000;
let num = 0;

for (; n > 50; num++) {
    n /= 2;
    console.log(n);
}

console.log('Количество итераций ' + num);

//6
for (let day = 6; day <= 31; day += 7) {
    console.log('Сегодня пятница, ' + day + '-е число. Необходимо подготовить отчет.');
}




