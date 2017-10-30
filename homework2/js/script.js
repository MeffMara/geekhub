// function createUser(name, age) {
//    return name + 1;
// }
// // Функция коструктор

// var user = createUser ('asd', 23);

// var createMember = function(name,state) {
//     return state + name;
// }
// var member = createMember('dwr', 34);
// //операция присвоения.Имннованная функция

// var createProduct = new Function('name, price','return name + price');
// var product = createProduct('fwerg', 32);

// console.log(product, member, user);


// function howArgument(a,b,c) {
//     for (var i = 0;i < arguments.length;i++){
//     // console.log(arguments[i]);
// } 
// console.log(howArgument.arguments.length);    
       
// }

// // input.value = 'arg';

// function sendArgument(arg1, arg2){
//     var inputValue = document.getElementById('text').value;
//     for (var i in inputValue) {
//         if (inputValue[i].addEventListener){

//         }
//     }
//     var arg2 = inputValue;
//     console.log(arg1);
//     console.log(arg2);
//     console.log(sendArgument.length);
// }

// ФУНКЦИЯ 1

function howArgSend() {
    return console.log(arguments.length);
    
}
// howArgSend();
// howArgSend('tree',true,1,0.32);
// howArgSend(1,2);

// Функция 2
function howArgStr() {
    var countTrue = 0;
    var countFalse = 0;
    for (var i = 0;i < arguments.length; i++) {
        if (typeof arguments[i]==='string') {
            countTrue++;
            // alert('No String');
            // console.log('Вы ввели строку ',+ countTrue + 'раз');
            // console.log(typeof( arguments[i]));
        } 
    }
    return countTrue;
}

// Функция 3
function sum() {
    var result = 0;
  
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
  
    return result;
  }
// Функция 4

