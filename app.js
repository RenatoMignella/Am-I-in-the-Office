//define a date object variable with date inside it
var date1 = new Date('04/26/2021');

//find the year of the entered date
var oneJan = new Date(date1.getFullYear(), 0, 1);

// calculating number of days in given year before the given date
var numberOfDays = Math.floor((date1 - oneJan) / (24 * 60 * 60 * 1000));

// adding 1 since to current date and returns value starting from 0
var result = Math.ceil((date1.getDay() + 1 + numberOfDays) / 7);

//display the calculated result

// List of week numbers marked as B (2021)
var week = '';
if (
     result == 17 ||
     result == 19 ||
     result == 21 ||
     result == 23 ||
     result == 25 ||
     result == 27 ||
     result == 29 ||
     result == 31 ||
     result == 33 ||
     result == 34 ||
     result == 35 ||
     result == 37 ||
     result == 39 ||
     result == 41 ||
     result == 43 ||
     result == 45 ||
     result == 47 ||
     result == 49 ||
     result == 51
) {
     week = 'b';
} else {
     week = 'a';
}

const inOffice = document.querySelector('.in-office');

//Grey color to body page
document.querySelector('body').style = 'background: #f3f3f3';

const day = new Date();
const weekday = new Array(7);
weekday[0] = 'Sunday';
weekday[1] = 'Monday';
weekday[2] = 'Tuesday';
weekday[3] = 'Wednesday';
weekday[4] = 'Thursday';
weekday[5] = 'Friday';
weekday[6] = 'Saturday';

const n = weekday[day.getDay()];

// week A  = MO,Tu,We
//week  B is equal Thu and Fr

if (week === 'b' && n === 'Thursday' && n === 'Friday') {
     inOffice.textContent = 'In office today (3PP)';
     inOffice.style.color = 'green';
}
if (week === 'a' && n === 'Monday' && n === 'Tuesday' && n === 'Wednesday') {
     inOffice.textContent = 'In office today (3PP)';
     inOffice.style.color = 'green';
} else {
     inOffice.textContent = 'NOT In office today';
     inOffice.style.color = 'red';

     document.querySelector('.time').textContent = 'Working from home 8:00 to 4:00 ';

     if (n === 'Saturday' || n === 'Sunday') {
          document.querySelector('.time').style.color = 'orange';
          document.querySelector('.time').textContent = 'Not Available on Weekends';
     }
}

// show the days that I will be available
if (week === 'b') {
     document.querySelector('.thisweek').textContent =
          'Days in on this Week: Thursday and Friday.';
} else {
     document.querySelector('.thisweek').textContent =
          'Days in on this Week: Monday Tuesday and Wednesday.';
}
