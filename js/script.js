/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

const numberOfFilms = +prompt('How films did you watching', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

const lastViewedFilm1 = prompt('One of last watched film?', ''),
    lastFilmRating1 = prompt('Your rating this film?', ''),
    lastViewedFilm2 = prompt('Last watched film?', ''),
    lastFilmRating2 = prompt('One of last watched film?', '');

personalMovieDB.movies[lastViewedFilm1] = lastFilmRating1;
personalMovieDB.movies[lastViewedFilm2] = lastFilmRating2;

console.log(personalMovieDB);