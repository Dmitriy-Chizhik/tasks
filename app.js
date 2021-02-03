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

// const obj = { Коля: '1000', Вася: '500', Петя: '200' };

// console.log(obj.Коля);
// console.log(obj['Петя']);



// Создайте объект с днями недели. Ключами в нем должны 
// служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// const obj = { 1: 'pon', 2: 'vtor', 3: 'sred', 4: 'chet', 5: 'piyat', 6: 'sub', 7: 'vos' };

// console.log(obj[7]);




// Пусть теперь номер дня недели хранится в переменной day, 
// например там лежит число 3. Выведите день недели, соответствующий значению переменной day.

// const day = 7;

// console.log(obj[day]);




// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(arr[1][0]);

// Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.


// const obj = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };

// console.log(obj.js[0]);


// Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, 
// являющийся массивом названий дней недели по-русски, а второй - 
// по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

// const arr = [ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
//     en = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
// ];


// console.log('рус ' +
//     arr[0][0] + ' wed ' + arr[1][2]);

// Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), 
// а в переменной day - номер дня. 
// Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

// function language(lang, day = 0) {

//     const arr = {
//         ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'],
//         en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
//     };

//     console.log(
//         arr[lang][day - 1]
//     )
// }

// language('ru', 3);



// В переменной day лежит какое-то число из интервала от 1 до 31. 
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// const day = 14;

// if (day <= 15) {
//     console.log('первая')
// } else if (day >= 16 || day <= 30) {
//     console.log('вторая')
// } else if (day >= 31 || day <= 45) {
//     console.log('третья')
// } else if (day >= 46 || day <= 59) {
//     console.log('четвёртая')
// }

// Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
// let obj = { green: 'зеленый', red: 'красный', blue: 'голубой' };

// for (let key in obj) {
//     console.log(key);
// }


// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = '';

// for (let i = 0; i <= arr.length - 1; i++) {
//     str += '-' + arr[i];
// }
// console.log(str);

// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
// let arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 'saturday' || arr[i] == 'sunday') {
//         document.write('<b>' + arr[i] + '<b/>' + '<br>');
//     } else {
//         document.write(arr[i] + '<br>');
//     }


// }

// Составьте массив дней недели. 
// С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
// const arr = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
// let day = 'thursday';
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === day) {
//         document.write('<em>' + arr[i] + '</em>' + '<br>');
//     } else {
//         document.write(arr[i] + '<br>');
//     }


// }

//Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? 
// Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n = 1000;
// let sum = 0;
// while (n > 50) {
//     n = n / 2;
//     sum += 1;
// }

// console.log(n);
// console.log(sum);


// Задачи на математические функции JavaScript


// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

// let a = 10;
// let b = 3;

// console.log(a % b);

// Даны переменные a и b. Проверьте, что a делится без остатка на b. 
// Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления

// const a = 10;
// const b = 6;

// if (a % b == 0) {
//     console.log('ДЕЛИТСЯ')
// } else {
//     console.log(`делится c остатком ${a%b}`)
// }



//  Возведите 2 в 10 степень. Результат запишите в переменную st.

// let st = Math.pow(2, 10);
// console.log(st);

// Найдите квадратный корень из 245.
// console.log(Math.sqrt(25));



// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. 
// Для решения воспользуйтесь циклом for.

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
// };
// console.log(Math.sqrt(sum));


// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// let int = Math.sqrt(379);

// console.log(int.toFixed(0));
// console.log(int.toFixed(1));
// console.log(int.toFixed(2));


//  Найдите квадратный корень из 587. 
// Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// let int = Math.sqrt(587);

// let obj = {
//     floor: Math.floor(int),
//     ceil: Math.ceil(int),
// }

// console.log(obj.ceil);


// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// let arr = [4, -2, 5, 19, -130, 0, 10];

// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min.apply(null, arr));
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));


// Выведите на экран случайное целое число от 1 до 100.

// document.write(Math.random() * (100 - 1) + 1);

// Заполните массив 10-ю случайными целыми числами.

// let arr = [];

// for (let i = 0; i < 10; i++) {

//     arr[i] = Math.round(Math.random() * (100 - 1) + 1);
// }
// console.log(arr)


// Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

// let a = 10;
// let b = 33;

// console.log(Math.abs(a - b))

// Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы
//  в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

// let a = 6;
// let b = 1;

// let c = Math.abs(a - b);
// console.log(c);


// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

// let arr = [12, 15, 20, 25, 59, 79];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum / arr.length);


// Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !)
//  - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

// function factorial(int) {
//     let fact = 1;
//     for (let i = 1; i <= int; i++) {
//         fact *= i;

//     }
//     console.log(`факториал числа ${int}! = ${fact}`);
// }
// factorial(5);



// Задачи на функции работы со строками в JavaScript

// Дана строка 'js'. Сделайте из нее строку 'JS'.

// let str = 'js';
// console.log(str.toUpperCase());

// Дана строка 'JS'. Сделайте из нее строку 'js'.
// let str = 'JS';
// console.log(str.toLowerCase());

// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке

// let str = 'я учу javascript!';
// console.log(str.length);

// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами 

// let str = 'я учу javascript!';
// console.log(str.substr(2, 3));
// console.log(str.slice(2, 5));
// console.log(str.substring(2, 5));

//  Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

// let str = 'я учу javascript!';
// console.log(str.indexOf('учу'));



// Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного 
// текста по следующему принципу: если количество символов этого текста больше заданного в переменной n,
//  то в переменную result запишем первые n символов строки 
// str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.

// function trimString(n) {
//     let str = 'i love javascript';
//     let result = '';
//     if (n > str.length) {
//         result = str.slice(0, 6) + ' ...';
//     } else {
//         result = str;
//     }
//     return result;
// }
// console.log(trimString(19));


// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

// let str = 'Я-учу-javascript!';
// console.log(str.replace(/-/g, '!'));


// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// let str = 'я учу javascript!';
// console.log(str.split(' '));

// Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

// let str = 'я учу javascript!';
// console.log(str.split(''));


// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

// let date = '2025-12-31';
// console.log(date.split('-').reverse().join('.'));


// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.

// let arr = ['я', 'учу', 'javascript', '!'];
// console.log(arr.join('+'));

//  Преобразуйте первую букву строки в верхний регистр.

// let str = 'javascript';
// str = str.replace(str[0], str[0].toUpperCase());
// console.log(str);

// Преобразуйте первую букву каждого слова строки в верхний регистр.

// let str = 'i love javascript!';

// str = str.split(' ');
// let strUpper = [];
// for (let i = 0; i < str.length; i++) {
//     let firstUpper = str[i][0].toUpperCase();
//     strUpper.push(str[i].replace(str[i][0], firstUpper));

// }
// console.log(strUpper.join(' '));


// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

// let str = 'var_test_text'

// function upper(str) {
//     str = str.split('_');
//     let strUpper = [str[0]];
//     for (let i = 1; i < str.length; i++) {

//         strUpper.push(str[i].replace(str[i][0], str[i][0].toUpperCase()));

//     }
//     console.log(strUpper.join(''));
// }

// upper(str);