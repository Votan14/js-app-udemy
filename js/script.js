/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
'use strict';

const numberOfFilms = prompt('How films did you watching', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

for (let i = 0; i < personalMovieDB['count']; i++) {   
    const lastViewedFilm = prompt('One of last watched film?', ''),
    lastFilmRating = prompt('Your rating this film?', '');
    if (lastViewedFilm != '' && lastFilmRating != '' && lastViewedFilm != null && lastFilmRating != null && lastViewedFilm.length < 50) {
        personalMovieDB.movies[lastViewedFilm] = lastFilmRating;  
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Few films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) { 
    console.log('You are a classic viewer');  
} else if (personalMovieDB.count > 30) {
    console.log('You are a film fan'); 
} else {
    console.log('Error'); 
}

console.log(personalMovieDB.movies);