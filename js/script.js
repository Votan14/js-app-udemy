/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* Задание на урок:

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/



'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('How films did you watching?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How films did you watching?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < personalMovieDB['count']; i++) {   
            const lastViewedFilm = prompt('One of last watched film?', ''),
            lastFilmRating = prompt('Your rating this film?', '');
            if (lastViewedFilm != '' && lastFilmRating != '' && lastViewedFilm != null && lastFilmRating != null &&
            lastViewedFilm.length < 50 && lastFilmRating != 0 && lastViewedFilm != 0) {
                personalMovieDB.movies[lastViewedFilm] = lastFilmRating;  
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Few films');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) { 
            console.log('You are a classic viewer');  
        } else if (personalMovieDB.count > 30) {
            console.log('You are a film fan'); 
        } else {
            console.log('Error'); 
        }
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat === false ? personalMovieDB.privat = true : personalMovieDB.privat = false; 
    },
    showMyDB: function() {
        if (!personalMovieDB['privat']) {
            console.log(personalMovieDB);
        }
        else {
            console.log('Private collection!');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB['genres'][i - 1] = prompt(`Your favourite genre ${i}`, '');
            if (personalMovieDB['genres'][i - 1] === '' || personalMovieDB['genres'][i - 1] === null) {
                i--;  
            } 
        }
        personalMovieDB['genres'].forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    }   
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();

console.log(personalMovieDB);