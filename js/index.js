"use strict";
let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// Функция вызова вопросса
function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
//Цыкл будет работать пока строка пустая или не чесло
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
    }
}
// Функция опроса фильмов
function rememberMyFilms() {
    let i = 0;
    while (i < 2) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = +prompt("На сколько оцените его?", "");
        i++;
        //Цыкл будет работать если в переменную (а) и (b) будет переданно значение не пустое ,
        // не пустая строка и длинна текста не будет длиннее 50 символов 
        if(a != null && b != null && a != '' && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
// Функция проверяющая количество просматриевымых фильмов
function detectPersonalLevel() {
    //если количество фильмов меньше 10
    if( personalMovieDB.count < 10) {
        alert("Можно еще пару фильмов глянуть");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { // если оно больше 10 и меньше 30
        alert("Самое оно");
    } else if (personalMovieDB.count > 30) {// если оно больше 30
        alert("Старик да ты киноман");
    }
}

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGeneres() {
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый фильм под номером ${i}`);
    }
}
start();

rememberMyFilms();

detectPersonalLevel();

showMyDB(personalMovieDB.privat);

writeYourGeneres();