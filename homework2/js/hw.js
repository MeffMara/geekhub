function howSendArgument() {
    return arguments.length;
    console.log('You send :' + arguments.length +' arguments');
};

$("button[type='submit']").click(function() {
    var text = prompt('Send SMS:');
    var phoneNumber = $("#phoneNumber").change(function (e) { 
        e.preventDefault();
        phoneNumber.value = text;
    });
});