//1
const numbs1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs1.length; i++) {
    console.log(numbs1[i]);
	if (numbs1[i] == 10) break;
}

//2
let position = [1, 5, 4, 10, 0, 3];
console.log(position.indexOf(4));

//3

let empty = [1, 3, 5, 10, 20];
empty = empty.join(' ');
console.log(empty);

//4

const array =[];
for (let i = 0, min = 0, max = 11; i < 11; i++) {
    array[i] = Math.floor(Math.random()*(max-min) +min);
}
console.log(array);
const evenNumbers = (el) => {
    return el % 2 == 0;
}
const newArray = array .filter(evenNumbers);
console.log(newArray);

//5

let arr = []
for (let i = 0; i < 3; i++) {
	arr[i] = []; 
	
	for (let j = 0; j < 3; j++) {
		arr[i].push(1); 
	}
}
console.log(arr);

//6

let first =[1,1,1];
first.push(2,2,2);
console.log(first);

//7

let excess = [9, 8, 7, 'a', 6, 5];
excess = excess.sort();
console.log(excess.pop());
console.log(excess);


//8

const array8 = [9, 8, 7, 6, 5];
let userAnswer8 = +prompt("Введите число от 1 до 10");
let Answer = array8.includes(userAnswer8);
console.log(Answer);


//9
const userWord = 'abcdef';
reverseWord = userWord.split('').reverse().join('');
console.log(reverseWord);
 

//10

const array10 =[];
for (let i = 0, min = 1, max = 11; i < 6; i++) {
    array10[i] = Math.floor(Math.random()*(max-min) +min);
}
const average = (array10) => {
    const sum = array10.reduce((acc, number) => acc  + number,  0);
   const length = array10.length;
   return sum  / length;
 };

 console.log(array10);
 console.log(average (array10));
//11

let array11 = [[1, 2, 3,],[4, 5, 6]];

console.log(array11.flat());

//12


const array12 =[];

for (let i = 0, min = 1, max = 11; i < 11; i++) {
    array12[i] = Math.floor(Math.random()*(max-min) +min);
}
for (let i = 0; i < array12.length-1; i++) { 
	console.log(`сумма ${i}-го и ${i+1}-го элемента равна ${array12[i]+array12[i+1]}`);
	

}
  console.log(`[${array12.join(', ')}]`);


