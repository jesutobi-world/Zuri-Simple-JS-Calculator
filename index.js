let value_1 = prompt("Enter first number");
var value_2 = prompt("Enter second number");
let value;

let operation = prompt("Choose operation: * + - /");
if(operation == '*'){
    value = parseInt(value_1) * parseInt(value_2) ;
}
else if(operation == '+'){
    value = parseInt(value_1) + parseInt(value_2);
}
else if(operation == '-'){
    value = parseInt(value_1) - parseInt(value_2);
}
else if(operation == '/'){
    value = parseInt(value_1) / parseInt(value_2);
}

document.getElementById('screen').innerHTML = value_1 + operation + value_2 + ' = ' + value;