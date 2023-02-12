//11
function storage() {
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
}
}
