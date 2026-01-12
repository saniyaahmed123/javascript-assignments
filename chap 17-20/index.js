// 1.
var multidimarr = [1,3,[5,4],9,4,[3]];

//2.
var matrix_arr = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
]
 //3.
 for( var i = 1 ; i <= 10 ; i++){
  document.write(`<h3>${i}</h3>`)
 }
 4.
 var tableOf = +prompt('enter a number for table',5);
 var tableLength = +prompt('enter length for table',10);
  for( var i = 1 ; i <= tableLength ; i++){
  document.write( `<div><h3>${tableOf} x ${i} = ${tableOf*i} </h3></div>`)
 }
//5.
 var fruits =['banana 🍌','apple 🍎','mango 🥭','cherry 🍒','kiwi 🥝']
 for( var i = 0 ; i < fruits.length ; i++){
  document.write(`<h3>${fruits[i]}</h3>`)

 }
 for( var i = 0 ; i < fruits.length ; i++){
    document.write(`<h3>element at  index ${i} is ${fruits[i]}</h3>`)


 }
 // 4
 var counting= ['counting :'];
 for( var i = 1 ; i <= 10 ; i++){
  counting.push(i)
 }
  document.write(`<h3> ${counting}</h3>`)


 var reverse =['reverse : ']
 for( var i = 10 ; i >= 1 ; i--){
  reverse.push(i)
 }
  document.write(`<h3>${reverse}</h3>`)

var even = ['even numbers :']
 for( var i = 0 ; i <= 10 ; i+=2){
    even.push(i)
 }
  document.write(`<h3> ${even}</h3>`)


var odd = ['odd numbers :']
 for( var i = 1 ; i <= 10 ; i+=2){
    odd.push(i)
 }
  document.write(`<h3> ${odd}</h3>`)



var even2 = ['series :']
 for( var i = 0 ; i <= 20 ; i+=2){
    even2.push(i+'k')
 }
  document.write(`<h3> ${even2}</h3>`)

  var items = ['cake','applepie','cookies','chips','patties'];
  var searchitem = prompt('enter an item to check')
  for(var i = 0 ; i <items.length ; i++){
    if(searchitem ===items[i]){
        document.write('<h3>'+searchitem+' is available at'+items.indexOf(searchitem)+'</h3>')
        console.log(searchitem+' is available at index '+items.indexOf(searchitem));
        
    }
  }