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
    console.log(`${name} — зарплата ${obj [name]}долларов.`);
    
}

//5

for (n = 1000, num = 1; n = n / 2; n / 2 < 5, num ++ ) {
    console.log(n);
    if (n / 2 <= 50) {
        break;
    }  
}
console.log("Колличество операций"+ num);

//6
//let day = 3;
for (let day = 3; day <= 31; dayNumber++) {
    if (day % 7 == 0) 
    console.log("Сегодня пятница, 3-е число. Необходимо подготовить отчет.");
    console.log("Сегодня пятница, 10-е число. Необходимо подготовить отчет.");
    console.log("Сегодня пятница, 17-е число. Необходимо подготовить отчет.");
    console.log("Сегодня пятница, 28-е число. Необходимо подготовить отчет.");
    console.log("Сегодня пятница, 31-е число. Необходимо подготовить отчет.");
    continue; 
	}

