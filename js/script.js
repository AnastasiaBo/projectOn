'use sctrict';

let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt('Один из последних просмотренных фильмов?');
let rateFilm = prompt('На сколько оцените его?');
let lastFilm2 = prompt('Один из последних просмотренных фильмов?');
let rateFilm2 = prompt('На сколько оцените его?');

personalMovieDB.movies[lastFilm] = rateFilm;
personalMovieDB.movies[lastFilm2] = rateFilm2;
console.log(personalMovieDB);
