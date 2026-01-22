// task 1 
var fname = prompt('enter your first name ');
var lname = prompt('enter your last name ');
var fullname = fname + " " + lname;
document.write(`<h3>fullname : ${fullname}</h3>`)


// task 2
var favmodel = prompt('enter your favourite mobile model');
document.write(`<h3>favourite mobile model : ${favmodel}</h3>`)
document.write(`<h3>length${favmodel.length}</h3>`)

// task 3
var word = 'pakistani'
var findindex = word.indexOf('n')
document.write(`<h3>index of n : ${findindex}</h3>`)

// task 4 
var word2 = 'hello world';
var indexofl = word2.lastIndexOf('l');
document.write(`<h3>last index of l : ${indexofl}</h3>`)

// task 5
var findchar = word.charAt(3);
document.write(`<h3>character at index 3 in 'pakistani' : ${findchar}</h3>`)

// task 6
document.write(`<h3>using .concat : ${fname.concat(" ", lname)}</h3>`);

// task 7 
var city = 'hyderabad'
var after_replacement = city.replace('hyder', 'islam')
document.write(`<h3>city : ${city}</h3>`);
document.write(`<h3>after replacement  : ${after_replacement}</h3>`);

// task 8 
var message = 'Ali and Sami are best friends. They play cricket and football together.'
var correctMessage = message.replaceAll('and', '&');
document.write(`<h3>message with &  : ${correctMessage}</h3>`);


// task 9 
var num = '472';
var integer = num.replace(num, 472) * 1;
document.write(`<h3>value : ${num}</h3>`);
document.write(`<h3>type of  : ${typeof (num)}</h3>`);
document.write(`<h3>value : ${integer}</h3>`);
document.write(`<h3>type of : ${typeof (integer)}</h3>`);

// task 10
var user_input = prompt('enter favourite food');
document.write(`<h3>value : ${user_input}</h3>`);
document.write(`<h3>uppercase : ${user_input.toUpperCase()}</h3>`);

// task 11 
var user_input2 = prompt('enter favourite hobby');
var title_case = user_input2.slice(0, 1).toLocaleUpperCase() + user_input2.slice(1).toLowerCase()
document.write(`<h3>titlecase : ${title_case}</h3>`);
//task 12
var num2 = 35.36
var string = ("" + num2).replace(".", "");
document.write(`<h3>num2 : ${num2}</h3>`);
document.write(`<h3>string: ${string}</h3>`);

// task  13 

var username = prompt('enter username');
for (var i = 0; i < username.length; i++) {
    if (username[i].charCodeAt !== 33 && username[i].charCodeAt !== 64 && username[i].charCodeAt !== 46 && username[i].charCodeAt !== 46) {
        alert('enter a valid username')
    }
}

// task 14
var search = prompt('enter an item to search if it is available').toLowerCase()
var bakery = ['cake', 'applepie', 'cookies', 'chips', 'patties'];
var flag = false>t
for (var i = 0; i < bakery.length; i++) {
    if (search === bakery[i].toUpperCase) {
        document.write(`<h3>  ${search}is available at index${i}</h3>`);
        flag = true
         break
    }
   
}
if(!flag){
        document.write(`<h3>  ${search}is not available</h3>`);

}