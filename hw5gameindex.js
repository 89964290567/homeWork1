const month = 9;
function times(month) {
    if (month == 1 || month == 2 || month == 12) {
        return alert("Зима");
    } else if (month == 3 || month == 4 || month == 5) {
        return alert("Весна");
    } else if (month == 6 || month == 7 || month == 8) {
        return alert("Лето");
    } else if (month == 9 || month == 10 || month == 11) {
        return alert("Осень");
    } else {
        return alert("Неверно");
    }
}
times(month);