// TASK 1 

var input = prompt('enter a city name');

if (input === 'karachi') {
    document.write('<h3>💡 welcome to the city of lights 💡</h3>')
}

// TASK 2
var gender = prompt('enter your gender');
if (gender === 'female') {
    document.write('<h3> good morning maam 🌞</h3>')
}
if (gender === 'male') {
    document.write('<h3> good morning sir 🌞</h3>')
}

// TASK 3

var signal = prompt('enter the traffic signal color')
if (signal === 'red') {
    document.write('<h3 class="red">  must stop 🚦</h3>')
}
if (signal === 'yellow') {
    document.write('<h3 class="yellow"> ready to move 🚦</h3>')
}
if (signal === 'green') {
    document.write('<h3 class="green"> move now 🚦</h3>')
}



// TASK 4

var fuel = prompt('enter remaining fuel in car');
if (fuel < 0.25) {
    document.write("<h3> please refill the fuel in tank ⛽</h3>" )
}

// TASK 5

// a
var a = 4;
if (++a === 5) {
    document.write("<h3> given condition for variable a is true ✔️</h3> ")
}

// b
var b = 82;
if (b++ === 83) {
    document.write("<h3> given condition for variable b is true ✔️</h3> ")
}

// c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true ✔️");
}
if (c === 13) {
    alert("condition 2 is true ✔️");
}
if (++c < 14) {
    alert("condition 3 is true ✔️");
}
if (c === 14) {
    alert("condition 4 is true ✔️");
}

// d

var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost
if (totalCost === materialCost + labourCost) {
    alert("the cost equals  " + totalCost);
}

// e
if (true) {
    alert('true');
}
if (false) {
    alert('false');
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat")
}

// TASK 6
var sub1 = +prompt('enter marks obtained in first subject');
var sub2 = +prompt('enter marks obtained in second subject');
var sub3 = +prompt('enter marks obtained in third subject');
var total_obt = sub1 + sub2 + sub3;
var total_marks = 300;
var percentage = (total_obt / total_marks) * 100;
var grade;
var remarks;

if (percentage >= 80) {
    grade = 'A-one'
    remarks = 'excellent'
}
if (percentage >= 70) {
    grade = 'A'
    remarks = 'good'
}
if (percentage >= 60) {
    grade = 'B'
    remarks = 'you need improvement'
}
if (percentage < 60) {
    grade = 'Fail'
    remarks = 'sorry'
}
document.write('<div>');

document.write('<h1>marks sheet</h1>');
document.write('<table>');
document.write('<tr><th class="th">total marks</th><td>' + total_marks + '</td></tr>');
document.write('<tr><th class="th">obtained marks</th><td>' + total_obt + '</td></tr>');
document.write('<tr><th class="th">percentage</th><td>' + percentage + ' %</td></tr>');
document.write('<tr><th class="th">grade</th><td>' + grade+ ' </td></tr>');
document.write('<tr><th class="th">remarks</th><td>' + remarks+ ' </td></tr>');
document.write('</table>');
document.write('</div>');

// TASK 7 

var secret_num = 6 ;
var guess =  +prompt('guess the secret number between 1 t0 10');
if(guess === secret_num){
    document.write('<h3> bingo! correct answer 🎉 </h3>')
}
if(guess === secret_num + 1){
    document.write('<h3> close enough to the correct answer 🎉 </h3>')
}
if(guess === secret_num - 1){
    document.write('<h3> close enough to the correct answer 🎉 </h3>')
}
// TASK 8

var user_num  = +prompt('enter a number to check divisibility by 3');
if (user_num % 3 ===0){
    document.write('<h3> the number is divisible by 3</h3>')
}
else{
      document.write('<h3> the number is not divisible by 3</h3>')
}
// TASK 9
var user_num2  = +prompt('enter a number to check even or odd')
if (user_num2 % 2 ===0){
    document.write('<h3> the number is even</h3>')
}
else{
      document.write('<h3> the number is odd</h3>')
}
// TASK 10
var temp = +prompt ('enter temperature');
if (temp > 40){
      document.write('<h3>Woooh, it\'s really hot 🔥! You should grab a cold drink. </h3>')

}
if (temp > 30 && temp <= 40){
      document.write('<h3> It\'s warm 🌞 outside, maybe enjoy some shade.</h3>')

}
if (temp > 20 && temp <= 30){
      document.write('<h3> The weather is normal 🙂, perfect for a walk.</h3>')

}
if (temp > 10 && temp <= 20){
      document.write('<h3> It\'s a bit cold ❄️, better wear a light jacket.</h3>')

}

// TAK 11
var first_number = +prompt('enter first number');
var second_number = +prompt('enter second number');
var operator = prompt('enter operator (+, -, *, /, % )');
var result;
if (operator === '+'){
    result = first_number + second_number
}
if (operator === '-'){
    result = first_number - second_number
}
if (operator === '*'){
    result = first_number * second_number
}
if (operator === '/'){
    result = first_number / second_number
}
if (operator === '%'){
    result = first_number % second_number
}
document.write('<h3> the result is '+result +'</h3>')