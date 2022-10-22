//pick "h1 tag" from html file
let monthEl = document.querySelector(".date h1");

//pick "p tag" from html file
let fullDateEl = document.querySelector(".date p");

//pick "days div" from html file
let fullDaysEl = document.querySelector(".days");
// console.log(fullDaysEl);

//get month value in number
let monthIndex = new Date().getMonth();
// console.log(monthIndex);

let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
// get value with Array index
let currentMonth = months[monthIndex];

//how to put value in html "h1" tag
monthEl.innerText = currentMonth;

//how to put value in html "p" tag
fullDateEl.innerText = new Date().toDateString();

//-----------get value days of current Years ------------

let nowYear = new Date().getFullYear()
// console.log(nowYear);


/*-----how to get last date of each month-------*/

const lastDay = new Date(nowYear, monthIndex +1,0).getDate();
console.log(lastDay);



//-----How to find a first day of the month--------------------------

// we use -1 because we start month from MONDAY but JS start week with SUNDAY
const firstDay = new Date(nowYear, monthIndex, 1).getDay() -1;
// console.log(firstDay);



// ------- Now use loop functions for complete the calendar date -----------

let days = "";

//for start date from first day of month we add this function. 
for (let i = firstDay; i > 0; i--){
    days += `<div class="empty"></div>`;
}

//this loop help to fill calendar with dates
for (let i = 1; i <= lastDay; i++){
    // if statement help to highlight the today date with "today class"
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    }else{
        days += `<div>${i}</div>`;
    }
}
//use this value in html days-div
fullDaysEl.innerHTML = days;



