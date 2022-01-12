"use strict";

const numberOFFilms = +prompt('How many fils are you watched','');

const personalMovieDB = {
  count:numberOFFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// загрузить из файла .lang язык
// if lang == ru 
// отображаем русский язык
// else 
// отображаем английский


const a = prompt('Один из просмотренных фильмов', ''),
      b = prompt('На сколько оцените его', ''),
      c = prompt('Один из просмотренных фильмов', ''),
      d = prompt('На сколько оцените его', '');

personalMovieDB.movies[a]  = b;
personalMovieDB.movies[c]  = d;

console.log(personalMovieDB);