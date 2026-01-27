//task 1
var num = prompt('enter a number')
var ceil = Math.ceil(num);
var floor = Math.floor(num);
var round = Math.round(num);
var number = Number(num);
document.write(`<h3>number : ${number}</h3>`)
document.write(`<h3>floor : ${floor}</h3>`)
document.write(`<h3>round : ${round}</h3>`)
document.write(`<h3>ceil : ${ceil}</h3>`)

//task 2 
prompt+("enter a number to get it's absolute value")
if(num < 0 ){
    num = -num
}
if(num > 0 ){
    num = num
}
else{
document.write(`<h3>not a number </h3>`)
    
}

//task 3
var dice = Math.floor(Math.random()*6+1)
document.write(`<h3>random dies value: ${dice}</h3>`)

//task 4
var user = prompt('enter heads or tails').toLocaleLowerCase();
var toss = Math.floor(Math.random()*2)+1
var value;
if(toss=== 2){
    value ='heads'
   
}
else if(toss ===1) {
    value = 'tails'

}
if(user===value){
document.write(`<h3>you won ! random coin value : ${value}</h3>`)

}
else{
document.write(`<h3>you lose ! random coin value : ${value}</h3>`)

}


//task 6
var random_value = Math.floor(Math.random()*100+1)
document.write(`<h3>random number between 1 and 100: ${random_value}</h3>`)
//task 7 
var weight = prompt('enter your weight ');
var num_weight = parseFloat(weight);
document.write(`<h3>yor weight is ${num_weight} kg</h3>`)


//task 8 
 
var secret_num = Math.floor(Math.random()*10+1);
var user_num = +prompt('guess the secret number ranging between 1 - 10');
if(secret_num === user_num){
document.write(`<h3>congratulations! you won</h3>`)
    
}
else{
document.write(`<h3>sorry! the secret number was ${secret_num}</h3>`)

}

