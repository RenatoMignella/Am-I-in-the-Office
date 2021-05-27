// function getWeekNumber(d) {
//      // Copy date so don't modify original
//      d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
//      // Set to nearest Thursday: current date + 4 - current day number
//      // Make Sunday's day number 7
//      d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
//      // Get first day of year
//      var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
//      // Calculate full weeks to nearest Thursday
//      var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
//      // Return array of year and week number
//      return [d.getUTCFullYear(), weekNo];
// }
// var result = getWeekNumber(new Date());

let now = new Date();
let onejan = new Date(now.getFullYear(), 0, 1);
let result = Math.ceil(
     ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7
);

console.log(result);

// List of week numbers marked as A (2021)

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
     week = 'a';
} else {
     week = 'b';
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

console.log(week);
console.log(n);
if ((week === 'b' && n === 'Thursday') || n === 'Friday') {
     inOffice.textContent = 'In office today (3PP)';
     inOffice.style.color = 'green';
} else if (week === 'a' && n === 'Monday' && n === 'Tuesday' && n === 'Wednesday') {
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

     document.querySelector('.nextweek').textContent =
          'Days in on next Week: Monday Tuesday and Wednesday';
} else {
     document.querySelector('.thisweek').textContent =
          'Days in on this Week: Monday Tuesday and Wednesday.';
     document.querySelector('.nextweek').textContent =
          'Days in on next Week: Thursday and Friday';
}
