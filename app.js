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

function board(x, y) {
    let string = ''
    for (let i = 0; i <= x - 1; i++) {
        if (i != 0) {
            string += '\n'
        }

        for (let j = 0; j <= (y - 1) / 2; j++) {
            if (i % 2 === 0 && j === 0) {
                string += '  #'
            } else string += ' #'

        }
    }
    console.log(string);
}

board(8, 8)