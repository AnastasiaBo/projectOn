'use sctrict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов Вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('error');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYouGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (favouriteGenre === '' || favouriteGenre === null) {
                console.log('Error');
                i--;
            } else {
                console.log(personalMovieDB.genres[i - 1] = favouriteGenre);
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },

};
