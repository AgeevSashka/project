"use strict";
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", " ");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let i = 0;
while (i < 2) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = +prompt("На сколько оцените его?", "");
    i++;
    if(a != null && b != null && a != '' && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}
if( personalMovieDB.count < 10) {
    alert("Можно еще пару фильмов глянуть");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Самое оно");
} else if (personalMovieDB.count > 30) {
    alert("Старик да ты киноман");
}