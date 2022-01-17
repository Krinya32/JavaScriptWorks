"use strict";

let numberOFFilms;

function start () {
    numberOFFilms = +prompt('Сколько фильмов вы уже посмотрели','');

    while (numberOFFilms == '' || numberOFFilms == null || isNaN(numberOFFilms)) { numberOFFilms = +prompt('Сколько фильмов вы уже посмотрели','');
    }
}

start ();

const personalMovieDB = {
  count: numberOFFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?', '');
        const b = prompt ('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a]  = b;
            console.log ('done');
        } else {
            console.log ('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log ('Просмотрено довольно таки мало фильмов');
    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log ('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log ('Вы киноман');    
    } else {
        console.log ('Произошла ошибка');
    }
}
detectPersonalLevel ();


function showMyDB (hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres ();


console.log(personalMovieDB);





// let message = prompt ('Ваш логин?', '');
// if (message == 'Админ' ) {
//     let password = prompt ('Ваш пароль', '');
//     if (password == 'Я главный') {
//     alert ('Hello');
//     } else if (password == '' || password == null) {
//     alert ('Отменено');
//     } else {
//     alert ('Неверный пароль');
//     }
// } else if (message == '' || message == null) {
//     alert( 'Отменено' );
// } else {
//     alert( "Я вас не знаю" );
// }

// let i = 2; 
//     for (i=2; i<11; i++) {
//         if (i % 2 == 1) continue;
//         console.log (i);
// }


