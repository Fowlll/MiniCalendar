let date = new Date();

let weekDay = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
let month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];

document.getElementById("day-name").innerHTML = weekDay[date.getDay()];

// dayNumber
let dayNumber = date.getDay();
if(dayNumber < 10){
    dayNumber = "0"+dayNumber;
}
document.getElementById("dayNumber").innerHTML = dayNumber;

// year
document.getElementById("month-year").innerHTML = month[date.getMonth()] + " " + date.getFullYear();