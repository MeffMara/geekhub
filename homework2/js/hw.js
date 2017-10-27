function howSendArgument() {
    
    for (var i = 1;i<arguments.length;i++) {
        arguments[i];
    }
    console.log('You send :' + arguments.length +' arguments');
}

function findStringArg() {
    console.log(howSendArgument.arguments);
}

