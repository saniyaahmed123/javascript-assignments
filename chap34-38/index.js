// function getTime() {
//     var date1 = moment().format('YYYY-MM-DD HH:mm:ss');
//     document.write("<h3>" + date1 + "</h3>");

// }
// getTime();
// function fullname() {
//     var firstName = prompt('enter your first name')
//     var lastName = prompt('enter your last name')
//     var fullName = firstName + " " + lastName;
//     document.write("<h3>Hello " + fullName + "</h3>");

// }
// fullname();
// function sum(a, b) {
//     var sum = a + b;
//     document.write("<h3>The sum of " + a + " and " + b + " = " + sum + "</h3>");

// }
// var num1 = Number(prompt('enter first number'));
// var num2 = Number(prompt('enter second number'));
// sum(num1, num2);
// function calculate(num1, num2, operator) {
//     var result = num1 + num2;
//     if (operator === '+') {
//         result = num1 + num2
//     }
//     else if (operator === '*') {
//         result = num1 * num2
//     }
//     else if (operator === '-') {
//         result = num1 - num2
//     }
//     else if (operator === '/') {
//         result = num1 / num2
//     }
//     else {
//         Swal.fire({
//         title: "Invalid operator",
//         icon: "warning",
//         showCancelButton: true
//     });

//     }
//     document.write("<h3>" + num1 + " " + operator + " " + num2 + " = " + result + "</h3>");

// }
// var value1 = Number(prompt('enter first number'));
// var value2 = Number(prompt('enter second number'));
// var operator = prompt('enter an operator (+, -, *, /)');
// calculate(value1, value2, operator);

// function square(num){
//     var square = num *num;
//     document.write("<h3>The square of " + num + " is " + square + "</h3>");
// }
// square(5);

// function factorial (number){
// var fact = 1;
     
//     for(var i = number; i>=1; i--){
        
//         fact = fact * i;

//     }
//     document.write("<h3>The factorial of " + number + " is " + fact + "</h3>");

// }
// factorial(4);
function count(start,end){
    var counting = "  ";
    for (var i = start;i<=end; i++  ){
        
        counting+=i+"  ";

    }
        document.write('<h3>counting from '+ start + ' to ' + end + ' : ' + counting + '</h3>')
}
var startNum  = Number(prompt('enter starting number')) 
var endNum  = Number(prompt('enter ending number')) 
count(startNum,endNum)