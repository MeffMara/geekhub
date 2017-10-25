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
howArgSend();
howArgSend(1,2);
howArgSend('tree',true,1,0.32);

// Функция 2
function howArgStr(arg1) {
    for (var i = 0;i < arguments.length; i++) {
        var count = 1;
    if (typeof( arguments[i])=='string') {
            count+=i;
            alert('String');
            console.log('Вы ввели строку ',+ count + 'раз');
            console.log(typeof( arguments[i]));
        } else {
            alert('No String');
            console.log(arguments[i]);
    }
    console.log('Вы ввели строку ',+ count + 'раз');
}}