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

const movies = {
    lastFilm: hisOc,
    anyLastFilm: anyHisOc
};

console.log(movies.lastFilm);
console.log(movies.anyLastFilm);
console.log(movies);