document.write('<h1>' + 'RESULT 👇' + '</h1>')

// TASK 1
var char = prompt('ener a character a-z or A-Z or 0-9');
var charcode = char.charCodeAt(0);
var message;

if (charcode >= 65 && charcode <= 90) {
    message = 'you entered a capital letter 🅰️';
}

else if (charcode >= 97 && charcode <= 122) {
    message = 'you entered a small letter ';

}
else if (charcode >= 48 && charcode <= 57) {
    message = '0️⃣  -you entered a number-  9️⃣';

}

else { message = 'please enter a character'; }

document.write('<h3>' + message + '</h3>')

// TASK 2

var int1 = +prompt('enter first integer');
var int2 = +prompt('enter second integer');
var result;

if (int1 > int2) {
    result = int1 + ' is larger than ' + int2;
}

else if (int2 > int1) {
    result = int2 + ' is larger than ' + int1;


}
else if (int2 === int1) {
      result = int2 + ' is equal to ' + int1;

}

else { result = 'please enter a number'; }

document.write('<h3>' + result + '</h3>')

//  TASK 3
var num = +prompt('enter a number to check positive, negative or zero');
if (num > 0) {
    document.write('<h3> number is positive</h3>')

}
else if (num < 0) {
    document.write('<h3> number is negative</h3>')

}
else if (num === 0) {
    document.write('<h3> number is zero</h3>')

}

else {
    document.write('<h3> please enter a number</h3>')

}
//  TASK 4
var alpha = prompt('enter an alphabet to check whether it is a vowel or not');
if (alpha === 'a' || alpha === 'e' || alpha === 'i'|| alpha ==='o' || alpha === 'u') {
    document.write('<h3> you entered a vowel</h3>')

}
else if (alpha >= 'a'  &&   alpha <= 'z') {
    document.write('<h3>you entered a consonant</h3>')

}


else {
    document.write('<h3> not an alphabet</h3>')

}