/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* Задание на урок:

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */



'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How films did you watching?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How films did you watching?', '');
    }
}

start();


const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };


function rememberMyFilms() {
    for (let i = 0; i < personalMovieDB['count']; i++) {   
        const lastViewedFilm = prompt('One of last watched film?', ''),
        lastFilmRating = prompt('Your rating this film?', '');
        if (lastViewedFilm != '' && lastFilmRating != '' && lastViewedFilm != null && lastFilmRating != null && lastViewedFilm.length < 50) {
            personalMovieDB.movies[lastViewedFilm] = lastFilmRating;  
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) { 
        console.log('You are a classic viewer');  
    } else if (personalMovieDB.count > 30) {
        console.log('You are a film fan'); 
    } else {
        console.log('Error'); 
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB['privat']) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB['genres'][i - 1] = prompt(`Your favourite genre ${i}`, ``);
    }
}

writeYourGenres();

console.log(personalMovieDB);