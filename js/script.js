'use sctrict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
    }

}
start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        let rateFilm = prompt('На сколько оцените его?', '');

        if (lastFilm != null && rateFilm != null && lastFilm != '' && rateFilm != '' && lastFilm.length < 50) {
            personalMovieDB.movies[lastFilm] = rateFilm;
        } else {
            console.log('error');
            i--;
        }

    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('error');
    }
}

detectPersonalLevel();


function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        console.log(personalMovieDB.genres[i - 1] = favouriteGenre);
    }
}
writeYouGenres();


