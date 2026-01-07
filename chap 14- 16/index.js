// TASK 1 
// declare nad initialize  a string array
var  desserts = ['cake', 'cookie','pudding','icecream','tiramisu'];
var numbers = [1,2,3,4,5,6,7,8,9,10];
var boolean = [true,false];
var mixed = ['tiramisu',6,true,90,'cake'];
 var qualifications = ['SSC', 'HSC', 'BSC', 'BS','BCOM','MS','M. Phil.','PhD'];

document.write('<h3>Qualifications:</h3>');
document.write('<h3>'+ qualifications.join(' , ')+'</h3>');

var students = ['saniya','zainab','ayesha'];
var scores = [320,280,240]
var total_marks = 500;
var percentage1 = (scores[0]/total_marks)*100;
var percentage2 = (scores[1]/total_marks)*100;
var percentage3 = (scores[2]/total_marks)*100;
document.write('<h3>'+students[0]+ ' scored  '+scores[0]+' .  percentage  :'+percentage1+'%</h3>');
document.write('<h3>'+students[1]+' scored  '+scores[1]+'  . percentage  : '+percentage2+'%</h3>');
document.write('<h3>'+students[2]+' scored  '+scores[2]+'  . percentage  : '+percentage3+'%</h3>');

var  colors  = ['red','blue','green','yellow','orange'];
document.write('<h3>'+ colors.join(' , ')+'</h3>');
var user_color = prompt("which color you want to add to the beginning?");
colors.unshift(user_color);
document.write('<h3> updated array : '+ colors.join(' , ')+'</h3>');
var user_color2 = prompt("which color you want to add to the end?");
colors.push(user_color2);
document.write('<h3> updated array : '+ colors.join(' , ')+'</h3>');
colors.unshift('lavender','pink');
document.write('<h3> updated array : '+ colors.join(' , ')+'</h3>');
colors.shift();
colors.shift();
document.write('<h3> updated array : '+ colors.join(' , ')+'</h3>');
colors.pop();
document.write('<h3> updated array : '+ colors.join(' , ')+'</h3>');
