// 1.    Регулярные выражения
// выучить правила регулярных выражений
// /\W/ - буквы от а-з и _



var numb = '123';

var rule = /^\d+$/; //строка должна начинаться с числа до +бесконечности

rule2 = /^[a-d]+$/; // от одного до 
console.log(rule.test(numb));