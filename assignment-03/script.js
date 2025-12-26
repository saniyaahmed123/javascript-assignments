var a = 10;
document.write("the value of a is: " + a + "<br>");
document.write("..........................................." + "<br>");

document.write("the  value of ++a is "+ ++a + "<br>");
document.write(" NOW , the  value of ++a is "+ a + "<br>");

document.write("the  value of a++ is "+ a++ + "<br>");
document.write(" NOW , the  value of ++a is "+ a + "<br>");

document.write("the  value of --a is "+ --a + "<br>");
document.write(" NOW , the  value of --a is "+ a + "<br>");

document.write("the  value of a-- is "+ a-- + "<br>");
document.write(",  NOW the  value of a-- is "+ a + "<br>");


// TASK2
 
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result+ "<br>");

// TASK3

 var user_name = prompt("enter your name");
 document.write("Welcome "+ user_name+ "<br>")

//  TASK 4
 
var num = prompt('enter a number to show its multiplication table');
document.write('multiplication of ' +num );
document.write( num +' x 1 =  ' + num * 1 +'<br>');
document.write( num +' x 2 =  ' + num * 2 +'<br>');
document.write( num +' x 3 =  ' + num * 3 +'<br>');
document.write( num +' x 4 =  ' + num * 4 +'<br>');
document.write( num +' x 5 =  ' + num * 5 +'<br>');
document.write( num +' x 6 =  ' + num * 6 +'<br>');
document.write( num +' x 7 =  ' + num * 7 +'<br>');
document.write( num +' x 8 =  ' + num * 8 +'<br>');
document.write( num +' x 9 =  ' + num * 9 +'<br>');
document.write( num +' x 10 = ' + num * 10 +'<br>');

var maths = prompt('enter fist subject name');
var urdu = prompt('enter second subject name');
var english = prompt('enter third subject name');
git push -u origin main

var total_marks = 100;
var obt1 = prompt('enter obtained marks in maths');
var obt2 = prompt('enter obtained marks in urdu');
var obt3 = prompt('enter obtained marks in english');
var total_obt = obt1 + obt2 +obt3 ;
var percentage = (total_obt / 300)*100;