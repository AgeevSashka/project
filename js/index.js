"use strict";
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", " ");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
    hisOc = +prompt("На сколько оцените его?", ""),
    anyLastFilm = prompt("Один из последних просмотренных фильмов?", ""),
    anyHisOc = +prompt("На сколько оцените его?", "");

console.log(`Первый фильм ${lastFilm} и его оценка ${hisOc}, второй фильм ${anyLastFilm} и его оценка ${anyHisOc}`);