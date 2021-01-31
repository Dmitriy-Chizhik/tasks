// let int = prompt('число');

// alert('число в квадрате ' + Math.pow(int, 2))

// const str = 'abcde';

// alert(str[0]);
// alert(str[2]);
// alert(str[4]);

// const num = '12345';

// let sum = num[0] * num[1] * num[2] * num[3] * num[4];

// alert(sum)


// function time(sec, monthDay = 29) {

//     const hours = sec * 60;
//     const day = (sec * 60) * 24;
//     const month = (((sec * 60) * 24) * monthDay)

//     alert("часы" + hours + ', день' + day + ', месяц' + month);
// }
// time(60, 30);


// треугольник по возрастанию
// let sharp = '';
// for (let i = 0; i < 7; i++) {

//     sharp = sharp + '#';
//     console.log(sharp);
// }


// вывод слов по делению
// let i = 1;
// while (i <= 100) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i + 'FizzBazz');
//     } else if (i % 3 == 0) {
//         console.log(i + 'Fizz');
//     } else if (i % 5 == 0) {
//         console.log(i + 'Buzz');
//     }


//     i++;

// }

// шахматная доска
// function board(x, y) {
//     let string = ''
//     for (let i = 0; i <= x - 1; i++) {
//         if (i != 0) {
//             string += '\n'
//         }

//         for (let j = 0; j <= (y - 1) / 2; j++) {
//             if (i % 2 === 0 && j === 0) {
//                 string += '  #'
//             } else string += ' #'

//         }
//     }
//     console.log(string);
// }

// board(8, 8)



// let obj = { 'коля': '1000', 'dima': '2000', 'petiy': '5000' };

// console.log(obj['коля']);
// console.log(obj['petiy']);

// создать массив двумя разными способами

// let arr = [1,2,3,4,5,6,7];

// let arr = [];

// arr[0] = 1;
// arr[1]=2;
// arr[2]=3
// и т.д


// Дан многомерный массив arr: Выведите с его помощью слово 'голубой'.

// let arr = {
//     'ru': ['голубой', 'красный', 'зеленый'],
//     'en': ['blue', 'red', 'green'],
// };

// console.log(arr['ru'][0]);



// Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

// let arr = ['a', 'b', 'c'];

// alert(arr);

// С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.

// alert(arr[0] + arr[1] + arr[2]);



// Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.

// let arr = ['a', 'b', 'c', 'd'];

// alert(arr[0] + arr[1]);
// alert(arr[2] + arr[3]);



// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на 
// четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

// const arr = [2, 5, 3, 9];

// const firstSum = arr[0] * arr[1];
// const sum = arr[2] * arr[3];

// const result = firstSum + sum;

// console.log(result);




// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:

// let obj = { a: 1, b: 2, c: 3 };

// console.log(obj['c']);
// console.log(obj.a);


// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.