var a = 10;
 document.write('<div>');
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
document.write('</div>');

TASK2
 
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write('<div>');
document.write("a    is " + a + "<br>");
document.write("b    is " + b + "<br>");
document.write("result    is " + result+ "<br>");
document.write('</div>');

TASK3

 var user_name = prompt("enter your name","user");
 document.write('<div>Welcome '+ user_name + '  👋  </div>')


// TASK 4
var num = prompt('enter a number to show its multiplication table');
document.write('<table>')
document.write('<th> multiplication of ' +num +'</th>');
document.write( '<tr> <td>'+ num +'  x  1  </td><td> =</td>  <td>'+ num * 1 +'</td></tr>');
document.write( '<tr> <td>'+ num +'  x  2  </td><td> =</td>  <td>'+ num * 2 +'</td></tr>');
document.write( '<tr> <td>'+ num +'  x  3  </td><td> =</td>  <td>'+ num * 3 +'</td></tr>');
document.write( '<tr> <td>'+ num +'  x  4  </td><td> =</td>  <td>'+ num * 4 +'</td></tr>');
document.write( '<tr> <td>'+ num +'  x  5  </td><td> =</td>  <td>'+ num * 5 +'</td></tr>');
document.write( '<tr> <td>'+ num +'  x  6   </td><td> =</td>   <td>'+ num * 6 +'</td></tr>');
document.write( '<tr> <td>'+ num +'  x  7  </td><td> =</td>  <td>'+ num * 7 +'</td></tr>');
document.write( '<tr> <td>'+ num +'  x  8  </td><td> =</td>  <td>'+ num * 8 +'</td></tr>');
document.write( '<tr> <td>'+ num +'  x  9   </td><td> =</td>   <td>'+ num * 9 +'</td></tr>');
document.write( '<tr> <td>'+ num +'  x  10   </td><td> =</td>   <td>'+ num * 10 +'</td></tr>');


document.write('</table>')
// TASK 5
var sub1  = prompt('enter fist subject name');
var sub2 = prompt('enter second subject name');
var sub3 = prompt('enter third subject name');

var total_marks = 100;
var obt1 = prompt('enter obtained marks in maths');
var obt2 = prompt('enter obtained marks in urdu');
var obt3 = prompt('enter obtained marks in english');
var total_obt = obt1 + obt2 +obt3 ;
var percentage = (total_obt / 300)*100;


document.write('<table>' );
document.write( '<tr><th>subjects </th><th> total marks</th> <th> obtained marks </th> <th>percentage</th></tr>');
document.write( '<tr><td>' + (sub1) + '</td><td>100</td><td>' + (obt1)+ '</td><td>' + (obt1/100*100)+ ' %</td></tr>');
document.write( '<tr><td>' + (sub2) + '</td><td>100</td><td>' + (obt2)+ '</td><td>' + (obt2/100*100)+ ' %</td></tr>');
document.write( '<tr><td>' + (sub3) + '</td><td>100</td><td>' + (obt3)+ '</td><td>' + (obt3/100*100)+ '%</td></tr>');
document.write( '<tr><td></td><td>' + total_marks+ '</td><td>' + total_obt+ '</td><td>' + (percentage)+ '%</td></tr>');
document.write('</table>' );

