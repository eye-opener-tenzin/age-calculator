var yourAge = prompt('What is your age?');
var days = 0;
if (yourAge  % 4 === 0) {
    days = yourAge * 366
} else {
   days = yourAge * 365
}
alert(`${yourAge} years is equale to ${days} day`)