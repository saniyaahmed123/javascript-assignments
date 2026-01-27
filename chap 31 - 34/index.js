//task 1
var date = new Date();
document.write("<h3>" + date + "</h3>");

//task2

var monthNNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = date.getMonth();
document.write("<h3>" + monthNNames[month] + "</h3>");

//task3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = date.getDay();
document.write("<h3>" + dayNames[day] + "</h3>");

//task4
if (day === 0 || day === 6) {
    document.write("<h3> it is funday </h3>");

}
//task5
var days = date.getDate();
if (days <16){
document.write("<h3>First fifteen days of the month</h3>");

}
else{
    document.write("<h3>Last days of the month</h3>");
}
//task6
var time = date.getHours();
if(time<12){
document.write("<h3>it is a.m.</h3>");

}
else{
document.write("<h3>it is p.m.</h3>");

}
//task7
var earlierDate = new Date('december,31,2020');
document.write("<h3>" + earlierDate + "</h3>");


//task8
var ramadanDate = new Date('february,17,2026');
var diff =   ramadanDate.getTime()-date.getTime()
var daysleft = Math.floor(diff/(1000 * 60 * 60 * 24));
document.write("<h3>" + daysleft  + " days left in ramadan</h3>");

//task9

var referencedate = new Date('january,1,2026');
var diff2 = date.getTime() - referencedate.getTime();
var sec = Math.floor(diff2/1000);
document.write("<h3>" + sec + " seconds have passed since the beginning of 2026</h3>");

//task10
var age = prompt('enter your age');
var birthYear = date.getFullYear()-age;
document.write("<h3>Your birth year is " + birthYear + "</h3>");