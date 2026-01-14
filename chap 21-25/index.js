//1
var fname = prompt('enter first name');
var lname = prompt('enter last name');
var fullname = fname + lname;
document.write(`<h3>${fullname}</h3>`)
//2
var model = prompt('enter your favourite mobile phone model');
document.write(`<h3>model : ${model}<br> model lenght : ${model.length}</h3>`)
//3 find index of n in pakistani
var word = 'pakistani';
for (var i = 0; i < word.length; i++) {
    if (word[i] === 'n') {
        document.write(`<h3>n found at index ${[i]} in pakistani</h3>`)

    }
}
//4
var word2 = 'hello world';
for(var i = 0 ; i < word2.length  ; i++){
     if (word2[i] === 'l') {
        indexOfWord2 = i

    }
}
document.write(`<h3>index of last l in hello world is ${indexOfWord2}</h3>`)
