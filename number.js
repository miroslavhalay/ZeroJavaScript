//1. Наступне число
let number = +prompt("Введіть число");
console.log(number + 1);

//2. Сума двох чисел
//Спитати два числа та вивести їх суму на екран у форматі x + y = z 
//Ну тобто якщо ми введемо, наприклад, 2 та 7, на консолі має бути рядок 2 + 7 = 9

let x = +prompt("Введіте число x: ");
let y = +prompt("Введіте число y: ");

// Розраховуємо результат
let z= x + y;

//Виводимо на екран
console.log(x + " + "  + y  +" = " +z);
