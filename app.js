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


// Задачи на функции работы с массивами в JavaScript

// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// console.log(arr1.concat(arr2));

// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]
// let arr = [1, 2, 3];
// console.log(arr.reverse())

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4, 5, 6)
// console.log(arr)

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6)
// console.log(arr)

// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq']
// console.log(arr.shift())

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент
// let arr = ['js', 'css', 'jq']
// console.log(arr.pop())

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr = [1, 2, 3, 4, 5]
// let arr1 = arr.slice(0, 3)
// let arr1 = arr.slice(3)
// console.log(arr1)

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2)
// arr.splice(5, 0, 2, 3, 4)
// arr.splice(3, 0, ' a', 'b', 'c');
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')
// console.log(arr)


// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let arr = [3, 4, 1, 2, 7];
// console.log(arr.sort());

// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// let obj = { js: 'test', jq: 'hello', css: 'world' };
// console.log(Object.keys(obj));

// тест
// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения
// let str = 'i love javascript';
// str = str.split(' ');
// let str1 = str[0].replace(str[0][0], str[0][0].toUpperCase());
// str[0] = str1;
// str = str.join(' ');

// let str = 'i love javascript';
// str = str.split(' ');
// let str1 = str.shift(str);
// if (str1.length > 1) {
//     str1 = str1.replace(str1[0][0], str1[0][0].toUpperCase());
// } else {
//     str1 = str1.toUpperCase();
// }
// str.unshift(str1);
// console.log(str.join(' '));

// let str = 'hello asdasdsa asdsad';
// str = str[0].toUpperCase() + str.substr(1);
// alert(str);

// let str = 'hello asdasdas asdasd';
// str = str.split('');
// str[0] = str[0].toUpperCase();
// let result = str.join('');
// alert(result);

// Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл
// let str = '123456';
// str = str.split('').reverse();
// alert(str.join(''));

// Проверьте, что строка начинается на http://
// function http(str) {
//     if (str.substr(0, 7) == 'http://') {
//         console.log('yes')
//     } else {
//         console.log(str.substr(0, 7));
//     }
// }
// http('http://asd')

// Проверьте, что строка заканчивается на .html
// function http(str) {
//     if (str.substr(-5) == '.html') {
//         console.log('yes')
//     } else {
//         console.log(str.substr(-5));
//     }
// }
// http('asdasdasd.html')

// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// function square(int) {
//     return int * int;
//     return Math.pow(int, 2);
// }
// alert(square(4));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function sum(int1, int2, int3) {
//     return (int1 - int2) / int3;
// }
// alert(Math.floor(sum(25, 8, 2)))

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// let int = prompt("число");
// function dayInWeek(int) {
//     switch (int) {
//         case 1:
//             alert('Понедельник');
//             break;
//         case 2:
//             alert('вторник');
//             break;
//         case 3:
//             alert('среда');
//             break;
//         case 4:
//             alert('четверг');
//             break;
//         case 5:
//             alert('пятница');
//             break;
//         case 6:
//             alert('суббота');
//             break;
//         case 7:
//             alert('воскресение');
//             break;

//         default:
//             alert('вы ввели некоректные данные')
//             break;
//     }
// }
// dayInWeek(Number(int));

// Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === 10) {
//         alert('да')
//         break;
//     } else if (arr[i] !== 5 && arr.length === i) {
//         alert('нет')
//     }
// }

// Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
// То есть в нашем случае нужно проверить, 
// что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.
// let int = 31;
// let i = 2;
// while (i < int) {
//     if (int % i == 0) {
//         alert('true')
//         break;
//     } else if (int % i != 0 && int - 1 == i) {
//         alert('false');
//         break;
//     }
//     i++;
// }

// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] === arr[i + 1]) {
//         alert('true');
//         break;
//     } else if (arr[i] !== arr[i + 1] && arr.length == i + 1) {
//         alert('false');
//     }
// }

// меньшее значение своя функция Math.min()
// function min(int1, int2) {
//     if (int1 < int2) {
//         console.log(int1)
//     } else if (int1 > int2) {
//         console.log(int2)
//     } else {
//         console.log('вы ввели одинаковые или неккоректные числа')
//     }
// }
// min(2, 3)

// рекурсия проверки чётности числа
// function isEven(int) {
//     if (int % 2 == 0) {
//         return 'чётное'
//     } else if (int % 2 == 1) {
//         return 'не чётное'
//     } else {
//         return (isEven(Math.abs(int)))
//     }
// }
// console.log(isEven(2))

// подсчёт букв
// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {

//         if (str[i] == char) {
//             count++;
//         }
//     }

//     console.log(count);
// }
// countChar('i love javascript', 'i')

// Задачи на приемы работы с циклами на JavaScript


// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// let int = '';
// for (let i = 1; i <= 9; i++) {
//     int = String(int) + String(i);
// }
// console.log(int)

// С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
// let int = '';
// for (let i = 9; i >= 1; i--) {
//     int = String(int) + String(i);
// }
// console.log(int)

// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
// let int = '-';
// for (let i = 1; i <= 9; i++) {
//     int = String(int) + String(i) + '-';
// }
// console.log(int)

// Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// let x = 'x';
// let y = 'x';
// console.log(x)
// for (let i = 0; i < 20; i++) {
//     y += x;
//     console.log(y)
// }

//  С помощью двух вложенных циклов нарисуйте следующую пирамидку:
// for (let i = 1; i <= 9; i++) {
//     document.write("\n")
//     for (let j = 1; j <= i; j++) {
//         document.write(i)
//     }
// }
// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for
// let x = 'xx';
// let y = '';
// for (let i = 0; i < 5; i++) {
//     console.log(y += x)
// }

// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// let arr = [];
// let x = 'x';
// let y = '';
// for (let i = 0; i < 9; i++) {
//     arr.push(y += x);
// }
// console.log(arr);

// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
// let arr = [];
// let int;
// for (let i = 1; i <= 9; i++) {

//     int = arr.push(String(i).repeat(i))
// }
// console.log(arr)

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
// Первым параметром функция принимает значение, которым заполнять массив, 
// а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']
// function arrayFill(element, intCount) {
//     let array = []
//     let i = 0;
//     while (i < intCount) {
//         i = array.push(element);
//     }
//     return array
// }

// console.log(arrayFill('x', 5));


// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// let array = [5, 6, 3, 4, 5, 6, 7];
// function count(array) {
//     let sum = 0;
//     for (let i = 0; i <= array.length; i++) {
//         if (sum > 10) {
//             sum = i
//             break;
//         } else {
//             sum += array[i];
//         }
//     }
//     return sum;
// }
// console.log(count(array));


// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// let array = [1, 2, 3, 4, 5, 6, 7];
// let reversArray = []
// for (let i = array.length; i > 0; i--) {
//     let int = array.pop();
//     reversArray.push(int)
// }
// console.log(reversArray)

// Дан двухмерный массив с числами, 
// например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным
// let array = [
//     [1, 2, 3],
//     [4, 5],
//     [6]
// ];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         sum += array[i][j]
//     }
// }
// console.log(sum)

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let arr = [
//     [
//         [1, 2],
//         [3, 4]
//     ],
//     [
//         [5, 6],
//         [7, 8]
//     ]
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[j].length; k++) {
//             sum += arr[i][j][k];
//         }
//     }
// }
// console.log(sum)
// переворот строки
// let str = 'qwertyuio';
// str = str.split('');
// let reversStr = [];
// for (let i = str.length; i > 0; i--) {
//     let int = str.pop();
//     reversStr.push(int)
// }
// console.log(reversStr.join('')) 


// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// function isNumberInRange(int) {
//     if (int > 0 && int < 10) {
//         return true
//     } else
//         return false
// }
// console.log(isNumberInRange(10))

// Дан массив с числами. Запишите в новый массив только те числа, 
// которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// function isNumberInRange(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 && arr[i] < 10) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr
// }
// console.log(isNumberInRange(arr))

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// function getDigitsSum(int) {
//     let sum = 0;
//     if (String(int).length > 1) {
//         int = String(int).split('')
//         for (let i = 0; i < int.length; i++) {
//             sum += Number(int[i])
//         }
//         return sum
//     } else
//         return int
// }
// console.log(getDigitsSum(88))

// Найдите все года от 1 до 2021, сумма цифр которых равна 13. 
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// function getDigitsSum(int) {
//     let arr = [];
//     for (let i = 0; i < int; i++) {
//         let sum = 0;
//         let int = String(i).split('')
//         for (let j = 0; j < int.length; j++) {
//             sum += Number(int[j])
//             if (sum == 13) {
//                 arr.push(i)
//             }
//         }
//     }
//     return arr
// }
// console.log(getDigitsSum(2021))



// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
// Если четное - пусть функция возвращает true, если нечетное - false.
// function isEven(int) {
//     if (int % 2 == 0) {
//         return true
//     } else
//         return false
// }
// console.log(isEven(22))


// Дан массив с целыми числами. Создайте из него новый массив, 
// где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// function isEven(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(isEven(arr))

// Сделайте функцию getDivisors, 
// которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
// function getDivisors(int) {
//     let arr = []
//     for (let i = 0; i <= int; i++) {
//         if (int % i == 0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(getDivisors(25))

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst,
//  которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.
// let str = 'i love javascript, i love php'
// function ucfirst(str) {
//     let string = [];
//     str = str.split(' ');
//     for (let i = 0; i < str.length; i++) {
//         let sub = str[i].substring(1)
//         str[i] = str[i].substring(0, 1).toUpperCase() + sub;
//         string.push(str[i]);
//     }
//     return string.join(' ')
// }
// console.log(ucfirst(str))


// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
// let str = 'var_text_hello'
// function ucFirst(str) {
//     let string = [];
//     str = str.split('_')
//     string.push(str[0])
//     for (let i = 0; i < str.length; i++) {
//         if (i > 0) {
//             let sub = str[i].substring(1);
//             str[i] = str[i].substring(0, 1).toUpperCase() + sub;
//             string.push(str[i])
//         }
//     }
//     return string.join('')
// }
// console.log(ucFirst(str))

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
// Функция первым параметром должна принимать текст элемента, 
// а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
// let arr = ['i', 'love', 'javascript']
// function inArray(str, arr) {
//     let i = 0;
//     while (i < arr.length) {
//         if (str == arr[i]) {
//             return true;
//         } else if (i == arr.length - 1) {
//             return false
//         }
//         i++;
//     }
// }
// console.log(inArray('love', arr))

//  Дана строка, например, '123456'. Сделайте из нее '214365'.
// function reversStr(str) {
//     let arr = []
//     for (let i = 0; i < str.length; i += 2) {
//         arr.push(str.substring(i, i + 2).split('').reverse().join(''))
//     }
//     return arr
// }
// console.log(reversStr('123456'))


// Работа с рекурсией
// Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// function recurs(arr, i = 0) {
//     console.log(arr[i])
//     if (i != arr.length - 1) {
//         i++
//         return recurs(arr, i)
//     }
// }
// recurs(arr)

// Дано число. Сложите его цифры. Если сумма получилась 
// более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
// let int = 99999;
// function recurs(int) {
//     let sum = 0;
//     let arr = String(int).slice('');
//     for (let i = 0; i < arr.length; i++) {
//         sum += parseInt(arr[i]);
//     }
//     if (sum > 9) {
//         return recurs(sum)
//     } else {
//         return sum
//     }
// }
// console.log(recurs(int))

// сумма диапозона

// function range(start, end, step = 1) {
//     let arr = [];
//     if (step > 0) {
//         for (let i = start; i <= end; i += step) {
//             arr.push(i);
//         }
//     } else if (step < 0) {
//         for (let i = start; i >= end; i += step) {
//             arr.push(i);
//         }
//     }

//     return arr
// }

// function sum(arr) {
//     console.log(arr)
//     let sumInt = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumInt += parseInt(arr[i]);
//     }
//     console.log(sumInt);
// }

// sum(range(5, 2, -1))






// dom


// let input = document.getElementById('text');
// function clickButton() {
//     alert(input.value);
// }

// ---------------------------------------------------------------------

// let input = document.getElementById('text');
// function changeInput() {
//     input.value = 'привет'
// }

// ---------------------------------------------------------------------

// function inputChange(val) {
//     alert(val.value);
//     val.value = 'привет'
// }

// ---------------------------------------------------------------------

// function inputChange(val) {
//     val.value = 'текст поменялся';

// ---------------------------------------------------------------------

// }
// function inputChangeOut(val) {
//     val.value = 'ещё раз поменялся';
// }

// ---------------------------------------------------------------------

// function changeTextSubmit(val) {
//     val.value = 'ку-ку';
// }

// ---------------------------------------------------------------------

// function changeTextSubmit(val) {
//     val.setAttribute("disabled", "disabled")
//     val.value = 'ку-ку';
// }

// ---------------------------------------------------------------------

// function inputStyleChange() {
//     let input = document.getElementById('input');
//     input.style.color = 'red';
//     input.style.width = '30%'
// }

// ---------------------------------------------------------------------

// function inputStyleChange() {
//     let input = document.getElementById('input');
//     input.style.display = 'none';

// }
// function inputStyleChangeRevers() {
//     let input = document.getElementById('input');
//     input.style.display = 'inline';
// }

// ---------------------------------------------------------------------

// function inputStyleChange() {
//     let input = document.getElementById('input');
//     input.style.borderRadius = '15px';
//     input.style.padding = '20px';
//     input.style.weight = '50%';
//     input.style.color = 'red';
//     input.value = 'новый текст'
// }

// ---------------------------------------------------------------------

// function sabmitStyleChange(id) {
//     id.setAttribute("disabled", "disabled");
//     id.value = 'нажать нельзя';
//     document.getElementById('ChangeRevers').style.display = 'inline'
// }
// function sabmitStyleChangeRevars(input) {
//     let inp = document.getElementById('Change');
//     inp.removeAttribute("disabled");
//     inp.value = 'нажми на меня';
//     input.style.display = 'none'
// }

// ---------------------------------------------------------------------

// function inputCountsum(inp) {
//     let i = parseInt(inp.value);
//     i++;
//     inp.value = i;
// }

// ---------------------------------------------------------------------

// function inpuTextChange() {
//     let text1 = document.getElementById('text1');
//     let text2 = document.getElementById('text2');
//     let text1Value = text1.value;
//     let text2Value = text2.value;
//     text1.value = text2Value;
//     text2.value = text1Value;
// }

// ---------------------------------------------------------------------

// function inpuIntSquare() {
//     let int = document.getElementById('int');
//     if (!parseInt(int.value)) {
//         alert('введите число')
//     } else {
//         document.getElementById('square').value = parseInt(int.value * int.value);
//     }
// }

// ---------------------------------------------------------------------

// function inpuElemAdd(elem) {j
//     let input = document.getElementById('input');b
//     input.value += elem.value;
// }

// ---------------------------------------------------------------------

// function textReplace() {
//     let p = document.querySelector('#p');
//     p.outerHTML = '<b>' + p.innerHTML + '</b>'
// }

// ---------------------------------------------------------------------

// function intSum() {
//     let input1 = document.querySelector('#input1');
//     let input2 = document.querySelector('#input2');
//     let p = document.querySelector('#p');
//     if (!input1.value) {
//         input1.value = 0;
//     }
//     if (!input2.value) {
//         input2.value = 0;
//     }
//     p.innerHTML = parseInt(input1.value) + parseInt(input2.value);
// }

// ---------------------------------------------------------------------

// function textSquare() {
//     let p = document.getElementsByTagName('p');
//     for (let i = 0; i < p.length; i++) {
//         p[i].innerHTML = 'sadsadsad';
//     }
// }

// ---------------------------------------------------------------------

// function TextSquareClassName() {
//     let cls = document.getElementsByClassName('www');
//     for (let i = 0; i < cls.length; i++) {
//         cls[i].innerHTML = i;
//     }
// }

// ---------------------------------------------------------------------

// function TextSquarePClassName() {
//     let cls = document.querySelectorAll('p.www');
//     for (let i = 0; i < cls.length; i++) {
//         cls[i].innerHTML = i;
//     }
// }

// ---------------------------------------------------------------------

// function getAttr() {
//     if (!document.querySelector('p').hasAttribute('class')) {
//         alert('класс удалён')
//     } else {
//         alert(document.querySelector('.myClass').getAttribute('class'))
//     }
// }

// function getAttrRemove() {
//     document.querySelector('p').removeAttribute('class')
//     alert('класс удалён')
// }

// function setAttrReplacement() {
//     let attr = document.querySelector('p');
//     attr.setAttribute('class', 'new-class');
//     alert(attr.getAttribute('class'));
// }

// ---------------------------------------------------------------------

// function inpValue() {
//     let attr = document.querySelector('#input');
//     let attr1 = document.querySelector('span');
//     attr1.innerHTML = attr.value;
// }

// ---------------------------------------------------------------------

// function  viewLink() {
//   let attr = document.querySelectorAll('a');
//   for (let i =0;i<attr.length;i++){
//       attr[i].innerHTML = attr[i].innerHTML + '('+ attr[i].href+')';
//   }
// }

// ---------------------------------------------------------------------

// function  disablButtonReplaceColorP(but) {
// let attr = document.querySelector('#p');
// attr.style.color = 'red';
// but.setAttribute('disabled','disabled');
// }

// ---------------------------------------------------------------------

// function TextReplaceP() {
//  let attr = document.querySelectorAll('p');
//  for(let i= 0;i<attr.length;i++){
//      attr[i].innerHTML = i
//     }
// }

// ---------------------------------------------------------------------

// function TextReplacePText() {
//  let attr = document.querySelectorAll('p');
//  for(let i= 0;i<attr.length;i++){
//      attr[i].innerHTML = i +'. ' + attr[i].innerHTML
//     }
// }


//DATE
// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию,
// которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)
// function date(){
//     let date = new Date();
//  let realDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()+' '
//      + zeroDate(date.getDate()) +'.'+zeroDate(date.getMonth() + 1)+'.'+date.getFullYear();
//  return realDate
// }
// function zeroDate(date){
//     if(String(date).length<2){
//         date = '0'+ date;
//         return date;
//     }
//     return date;
// }
// console.log(date())
// let date = new Date(2015,0,7);
// console.log((date.getDay()))

//Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени
// let date = new Date();
// let time = date.getTime();
// console.log(Math.floor((time / 1000) / 60))
//Выведите на экран количество часов, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse
// let time = Date.parse('1988-03-01T00:00:00');
// let date = new Date();
// let now = date.getTime();
// let result = now - time;
// console.log(Math.floor(result/(1000*60*60)))
//Выведите на экран количество секунд с начала дня до настоящего момента времени
// let time = Date.parse('2021-02-17T00:00:00')
// let date = new Date();
// let now = date.getTime();
// let result = now - time;
// document.write(Math.floor(result/1000))
// let date1 = new Date();
// let now1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0);
// let result1 = Math.floor((date1.getTime() - now1.getTime()) / 1000);
// alert(result1);

//Выведите на экран количество секунд, которое осталось до конца дня
// let date = new Date();
// let now = new Date(date.getFullYear(), date.getMonth(), date.getDay(),date.getHours(),date.getMinutes(),date.getSeconds());
// let endDay = new Date(date.getFullYear(), date.getMonth(), date.getDay(), 23,59,59);
// let result = Math.floor(((endDay - now) /1000))
// document.write(result)

//Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31' (с конкретным годом).
// По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения. Воспользуйтесь методом Date.parse.
// function getDateBirth(date) {
//   let dateBirth = date.value.split('-');
//   let datenow = new Date();
//   let dateTime = Date.parse(`${String(datenow.getFullYear())}-${String(dateBirth[1])}-${String(dateBirth[2])}` + 'T00:00:00')
//   let now = 0;
//   let time = datenow.getTime()
//   if(time > dateTime){
//     now = Date.parse(`${String(datenow.getFullYear()+1)}-${String(dateBirth[1])}-${String(dateBirth[2])}` + 'T00:00:00')
//     now = (now - time) / (1000*60*60*24);
//   }else if(time < dateTime){
//     now = Date.parse(`${String(datenow.getFullYear())}-${String(dateBirth[1])}-${String(dateBirth[2])}` + 'T00:00:00')
//     now = (now - time)  / (1000*60*60*24);
//   }
//   let birth = document.querySelector('#dateBirth');
//   birth.innerHTML = '<p>' + Math.floor(now +1) + '</p>'
// }


// Создайте отсчет с кнопкой остановки:
// let count = document.querySelector('#count');
// count.addEventListener('click',()=>{
//     but.removeAttribute('disabled')
//   window.timeId = window.setInterval(timer, 1000);
// })
// let but = document.querySelector('#but');
// but.addEventListener('click', ()=>{
//     window.clearInterval(window.timeId);
//     but.setAttribute('disabled','disabled')
// })
// function timer() {
// let p = document.querySelector('p');
// let text = p.innerHTML;
// if(text < 10){
//     p.innerHTML = parseInt(text)+1;
// }
// }

// Создайте тикающие часики
// let time = document.querySelector('#time');
// window.addEventListener('load',()=>{
//     setInterval('clock()', 1000);
// })
// let clock = ()=>{
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let second = date.getSeconds();
//     if((String(second).length < 2)){
//         second = '0'+second;
//     }
//     if((String(minutes).length < 2)){
//         // console.log('123')
//         minutes = '0'+minutes;
//     }
//     time.innerHTML = hours +':'+minutes+':'+second;
// }

//Создайте простой слайдер
// window.addEventListener('load',()=>{
//     let i =0;
//    window.setInterval(()=>{
//        let slider= document.querySelector('#slider')
//        let image = slider.querySelector('img');
//        let arrImage = ['1.png','2.png','3.png'];
//        image.src = '/images/' + arrImage[i];
//        i++;
//        if(i == arrImage.length){
//            i = 0;
//        }
//    }, 1000);
// })

//courusel
// let button = document.querySelector('#button')
// button.addEventListener('click',()=>{
//     button.setAttribute('disabled','disabled');
// let img1 = document.querySelector('#img1');
//     let img2 = document.querySelector('#img2');
//     let img3 = document.querySelector('#img3');
//         setInterval(()=>{
//       let tmp = img1.src;
//             img1.src = img2.src;
//             img2.src = img3.src;
//             img3.src = tmp;
//
//         },1000);
// })

//время до полуночи
// window.addEventListener('load',()=>{
//    window.timerId = window.setInterval(timer,1000);
// })
//
// function timer() {
// let hours = document.querySelector('#hours');
//    let minutes = document.querySelector('#minutes');
//    let seconds = document.querySelector('#seconds');
//    let now = new Date();
//    let midnight = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,0);
//    let diff = Math.floor((midnight-now)/1000);
//    let hoursRemain = Math.floor(diff/(60*60));
//    let minutesRemain = Math.floor((diff - hoursRemain*60*60)/60);
//    let secondRemain = Math.floor(diff%60);
//    hours.innerHTML = hoursRemain;
//    minutes.innerHTML = addZero(minutesRemain);
//    seconds.innerHTML = addZero(secondRemain);
//
// }
// function addZero(num) {
// if(num<=9){
//    return'0'+num;
// }
// return num;
// }

//Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.
// window.addEventListener('load',()=>{
// let elements = document.querySelectorAll('img');
// for (elem of elements){
//    elem.onclick = func;
// }
//    function func() {
//       alert(this.getAttribute('src'));
//    }
// })

//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст
// Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках
//Дополните предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста.
// let a = document.querySelectorAll('a');
// for(elem of a){
//     elem.addEventListener('mouseover',func);
// }
// function func() {
//   this.setAttribute('title', this.innerHTML);
//   this.innerHTML = this.innerHTML + '('+ this.getAttribute('href')+ ')';
//   this.removeEventListener('mouseover',func);
// }

//Привяжите всем инпутам следующее событие - по потери фокуса каждый инпут выводит свое value в абзац с id="test".
//Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них,
// но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции
// let inputs = document.querySelectorAll('input');
// for(elem of inputs){
//   // elem.addEventListener('blur',func);
//     elem.addEventListener('click',func);
// }
// function func() {
//  // let test = document.getElementById('test');
//  // test.innerHTML = this.value;
//     alert(this.value);
//     this.removeEventListener('click',func);
// }

//Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит
// let div = document.querySelector('#intSquare');
// let p = div.querySelectorAll('p');
// for(elem of p){
//     elem.addEventListener('click', func);
// }
// function func() {
//   this.innerHTML = 'квадрат числа ' + this.innerHTML + ' = ' + this.innerHTML * this.innerHTML;
//   this.removeEventListener('click',func);
// }

//Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в атрибуте data-length.
// Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.
// let input = document.querySelectorAll('input');
// for(elem of input){
//     elem.addEventListener('blur',func);
// }
// function func() {
//     if(this.dataset.length == this.value.length){
//         this.style.borderColor = 'green';
//     }else {
//         this.style.borderColor = 'red';
//     }
// }

//Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый
// клик происходит чередование фона.
// Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener
// let div = document.querySelectorAll('div');
// for(elem of div){
//     elem.addEventListener('click', funcRed)
// }
// function funcGreen() {
//    this.style.backgroundColor = 'green';
//         this.removeEventListener('click', funcGreen);
//         this.addEventListener('click', funcRed)
// }
// function funcRed() {
//   this.style.backgroundColor = 'red';
//       this.removeEventListener('click', funcRed);
//       this.addEventListener('click', funcGreen)
// }

// Дан элемент #elem. Добавьте ему класс www.
// Дан элемент #elem. Удалите у него класс www.
// Дан элемент #elem. Проверьте наличие у него класса www.
// Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
// Дан элемент #elem. Узнайте количество его классов.
// Дан элемент #elem. Выведите последовательно алертом его классы.
// let div = document.querySelector('div');
//     div.classList.add('www');
// div.classList.remove('www');
// console.log(div.classList.contains('www'));
// div.classList.toggle('www');
// console.log(div.classList.contains('www'));
// console.log(div.classList.length);
// for(elem of div.classList){
//     alert(elem)
// }

// Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText
// let elem = document.querySelector('#elem');
// elem.style.cssText = 'background: red; font-size: 20px; width:30px; heigth: 30px; border: solid';

//Дан элемент #elem. По клику на него выведите название его тега.
//  Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.
//  Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
// let div = document.querySelectorAll('.www');
// div.addEventListener('click',()=>{
//     alert(div.tagName)
//     alert(div.tagName.toLowerCase())
// })
// for(elem of div){
//     elem.classList = elem.className + elem.tagName.toLowerCase();
// }

// Дан ol. Вставьте ему в конец li с текстом 'пункт'
// let ol = document.querySelector('#ol');
// let li = document.createElement('li');
// li.innerHTML = 'пункт';
// ol.appendChild(li);


// Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// let ul = document.querySelector('#ul');
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i =0; i<=arr.length; i++){
//     let li = document.createElement('li');
//     li.innerHTML = i;
//     ul.appendChild(li);
// }

//Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'.
// let parent = document.querySelector('#elem');
// let ul = document.querySelector('ul');
// let li = document.createElement('li');
// li.innerHTML = '!!!';
// ul.insertBefore(li,parent);
//Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
//Дан элемент #elem. Вставьте после него span с текстом '!!!'.
//Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.
//Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.
// let elem = document.getElementById('elem');
// elem.insertAdjacentHTML("beforebegin", '<span>!!!</span>')
// elem.insertAdjacentHTML("afterend", '<span>!!!</span>')
// elem.insertAdjacentHTML("afterbegin", '<span>!!!</span>')
// elem.insertAdjacentHTML("beforeend", '<span>!!!</span>')


//Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета
//Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
//Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
// let parent = document.querySelector('#elem');
// let text = parent.firstElementChild.style.color = 'red';
// let text1 = parent.lastElementChild.style.color = 'red';
// let text2 = parent.children;
// for (elem of text2){
//     elem.innerHTML = elem.innerHTML + '!';
// }


//Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
//Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'.
//Дан элемент #elem. Найди��е его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
// let elem = document.querySelector('#elem');
// let nbour = elem.previousElementSibling;
// nbour.innerHTML = nbour.innerHTML + '!';
// let nbour1 = elem.nextElementSibling;
// nbour1.innerHTML = nbour1.innerHTML + '!';
// let nbour2 = elem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
// nbour2.innerHTML = nbour2.innerHTML + '!';


//Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.
//Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.
// let elem = document.querySelector('#elem');
// let parent = elem.parentElement;
// parent.style.backgroundColor = 'red'
// let parent2 = parent.parentElement;
// parent2.style.backgroundColor = 'green';


//Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.
//Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
//Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.
//Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.
// document.querySelector('#button').addEventListener('click',()=>{
// let parent = document.querySelector('#parent');
// let child = document.querySelector('#child');
// parent.removeChild(child);

//     let ol =document.querySelector('ol');
//     let lastChild = ol.lastElementChild;
//     ol.removeChild(lastChild);
// })
// document.querySelector('#elem').addEventListener('click', ()=>{
//     let elem = document.querySelector('#elem')
//     elem.parentElement.removeChild(elem)
// })
// let ol = document.querySelector('#ol');
// let child = ol.querySelectorAll('li').forEach(elem => elem.addEventListener('click',()=>{
//    elem.parentElement.removeChild(elem);
// }))


// Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
// document.querySelector('#button').addEventListener('click',()=>{
//     let input = document.querySelector('#input');
//     let clone = input.cloneNode();
//     document.querySelector('body').appendChild(clone)
// })

//Дан массив. Создайте ul через createElement,
// затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.
// let arr = [1,2,3,4,5,6,7,8,9];
// let ul = document.createElement('ul');
// arr.forEach(elem=>{
//   let li = document.createElement('li');
//   li.innerHTML = elem;
//   ul.append(li);
// })
// let body = document.querySelector('body');
// body.append(ul);

//Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
// let button = document.querySelector('#button');
// button.addEventListener('click',()=>{
//     let input = document.createElement('input');
//     input.type = 'text';
//     let docInput = document.querySelector('#input').insertAdjacentElement('afterend',input);
// })


//Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут.
// Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.
// let input = document.querySelector('#input');
// input.addEventListener('blur', ()=>{
//     let body = document.querySelector('body');
//     let newInput = input.value.split('');
//     newInput.forEach(elem =>{
//         let createInput = document.createElement('input');
//         createInput.style.color = 'red';
//         createInput.value = elem;
// body.append(createInput);
//     })
// })


//Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.
// let button = document.querySelector('#button');
// button.addEventListener('click', displayNone);
// function displayNone() {
//   button.parentElement.style.display = 'none';
// }

// let f = function g() {
//     return 23;
// }
// alert(typeof g());


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name) {
//         super(name);
//         this.created = Date.now();
//     }
// }
// let rabbit = new Rabbit("Белый кролик");
// alert(rabbit.name);

// function foo(a, b) {
//     console.log(arguments.length);
// }
// foo(1, 2, 3);

// Если переменная a больше нуля - то в ggg запишем функцию, которая выводит один !, иначе запишем функцию, которая выводит два !
// const a = -1;
// let ggg = function(a) {
//     if (a > 0) {
//         return '!';
//     } else {
//         return ('!!');
//     }
// }
// console.log(ggg(a))

// Функция ggg принимает 2 параметра: число и анонимную функцию, 
// которая возводит число в квадрат. Возведите число в 4-тую степень с помощью ggg
// let ggg = function(n, f) { return f(n) };
// let funcNew = function(a) { return Math.pow(a, 4) };
// let a = 7;
// alert(ggg(a, funcNew));


// Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 
// 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4
// let ggg = function(n, f) { return n() + f() };
// let funcN = function() { return 3 };
// let funcF = function() { return 4 };
// alert(ggg(funcN, funcF));


// Дана функция ggg. Она требует первым параметром число, вторым функцию, которая возводит в квадрат, 
// а третьим параметром функцию, которая возводит в куб. 
// Эти функции есть как Function Declaration - kvadrat, kub. Пусть функция ggg вернет сумму квадрата и куба числа
// function ggg(n, f, z) {
//     alert(f(n) + z(n));
// }
// function kvadrat(a) {
//     return Math.pow(a, 2);
// }
// function kub(a) {
//     return Math.pow(a, 3);
// }
// ggg(5, kvadrat, kub);


// Сделайте функцию each, которая первым параметром принимает массив, 
// а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть измененный массив
// function each(arr, f, ) {
//     alert(f(arr));
// }
// function map(n) {
//     let arr = n.map((num) => { return num * 2 });
//     return arr;
// }
// each([1, 2, 3, 4, 5], map);



// Сделайте функцию each, которая первым параметром принимает массив, а вторым - массив функций, 
// которые по очереди применятся к каждому элементу массива: к первому элементу массива - первая функция, 
// ко второму - вторая и так далее пока функции в массиве не закончатся, после этого возьмется первая функция, вторая и так далее по кругу
// function each(arr, funcArr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let current = funcArr[i % funcArr.length](arr[i]);
//         newArr.push(current);
//     }
//     return newArr;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function a(n) { return n * 1 };
// function b(n) { return n * 2 };
// function c(n) { return n * 3 };
// let arrFunc = [a, b, c];
// alert(each(arr, arrFunc));


// Сделайте функцию, которая считает и выводит количество своих вызовов
// function func() {
//     let i = 1;
//     return function() {
//         return i++;
//     };
// }
// let f = func();
// console.log(f());
// console.log(f());
// console.log(f());
// console.log(f());
// console.log(f());

// Даны кнопки. Привяжите к каждой кнопке событие по клику, которое будет считать 
// количество нажатий по кнопке и выводить его в текст кнопки. Количество нажатий для каждой кнопки должно хранится в замыкании
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', () => {
//     button1.innerHTML = f();
// });
// button2.addEventListener('click', () => {
//     button2.innerHTML = n();
// })
// function func() {
//     let i = 1;
//     return function() {
//         return i++;
//     }
// }
// let f = func();
// let n = func();




// Дан массив цветов. Даны абзацы. По первому нажатию на абзац 
// он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее. Все абзацы работают независимо.
// let arrColor = ['red', 'black', 'blue', 'green', 'magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// let p = document.querySelectorAll('p');
// function styleColorP() {
//     let i = 0;
//     return function() {
//         this.style.color = arrColor[i];
//         i++;
//         if (i == arrColor.length) {
//             i = 0;
//         }
//     }
// }
// for (let i = 0; i < p.length; i++) {
//     p[i].addEventListener('click', styleColorP())
// }


// Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, 
// пока не будут перебраны все числа из этого промежутка. 
// Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией
// function numRand() {
//     let arr = [];
//     return function() {
//             let num = Math.floor(Math.random() * 100 + 1);
//             for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] == num) return;
//             };
//             parag.innerHTML += num + ', ';
//             arr.push(num);
//     }
// }
// let but = document.querySelector('button').addEventListener('click', numRand());
// let parag = document.querySelector('p');









//задачи из learn.javascript

// Перепишите функцию, используя оператор '?' или '||'
// function checkAge(age) {
// if (age > 18) {
//     return true;
// } else {
//     return confirm('Родители разрешили?');
// }
// return  (age > 18) ? true : confirm('Родители разрешили?');
// return (age>18)|| confirm('Родители разрешили?');
// }
//Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// function pow(x,n) {
//    let i =1;
//   let sum = x;
//    while (i < n){
//       sum *= x;
//        i++;
//    }
//    return sum;
// }
// console.log(pow(2,4));

//Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );
// let ask = (question, yes, no) =>{
//     confirm(question) ? yes() : no();
// }
// ask("Вы согласны?",
//     () =>{ alert("Вы согласились."); },
//     () =>{ alert("Вы отменили выполнение."); })