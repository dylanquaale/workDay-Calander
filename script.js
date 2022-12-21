// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let hourNine = $('#hour-9');
let hourTen = $('#hour-10');
let hourEleven = $('#hour-11');
let hourTwelve = $('#hour-12');
let hourOne = $('#hour-1');
let hourTwo = $('#hour-2');
let hourThree = $('#hour-3');
let hourFour = $('#hour-4');
let hourFive = $('#hour-5');

// displays current date in header
let now = dayjs().format("dddd, MMMM D YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = now;

// makes click btn able to save to local storage
$(document).ready(function() {
  $('.saveBtn').on('click', function () {
  
  var textContent = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  
  localStorage.setItem(time, textContent);

});
});
 // saves to local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-1 .description').val(localStorage.getItem('hour-1'));
$('#hour-2 .description').val(localStorage.getItem('hour-2'));
$('#hour-3 .description').val(localStorage.getItem('hour-3'));
$('#hour-4 .description').val(localStorage.getItem('hour-4'));
$('#hour-5 .description').val(localStorage.getItem('hour-5'));

const rows = document.getElementsByClassName("time-block");
let currentDate = parseInt(dayjs().format('H'));
// came from stack overflow
Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentDate === rowHour) {
      setColor(row, "red");
    } else if ((currentDate < rowHour) && (currentDate > rowHour - 0)) {
      setColor(row, "green");
    } else if ((currentDate > rowHour) && (currentDate < rowHour + 0)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});








     // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.