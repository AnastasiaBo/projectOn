'use sctrict';

let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >=30) {
    alert('Просмотрено довольно много фильмов');
} else {
    alert('error');
}
console.log(personalMovieDB);
