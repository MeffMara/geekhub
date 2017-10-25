function createUser(name, age) {
   return name + 1;
}
// Функция коструктор

var user = createUser ('asd', 23);

var createMember = function(name,state) {
    return state + name;
}
var member = createMember('dwr', 34);
//операция присвоения.Имннованная функция

var createProduct = new Function('name, price','return name + price');
var product = createProduct('fwerg', 32);

console.log(product, member, user);


function howArgument(a,b,c) {
    for (var i = 0;i < arguments.length;i++){
    console.log(arguments[i]);    
    } 
       
}
howArgument(1,2,5,'fer');

