var num1 = 8;
var num2 = 16;
var total = num1 + num2;
document.write("The sum of" + " " + num1 + "+" + num2 + " " + "is" + " " + total);

document.write('<br>')

var num1 = 80;
var num2 = 55;
var total = num1 - num2;
document.write("The subtraction of" + " " + num1 + "-" + num2 + " " + "is" + " " + total);

document.write('<br>')

var num1 = 8;
var num2 = 3;
var total = num1 * num2;
document.write("The  multiplication of" + " " + num1 + "*" + num2 + " " + "is" + " " + total);

document.write('<br>')

var num1 = 60;
var num2 = 3;
var total = num1 / num2;
document.write("The division of" + " " + num1 + "/" + num2 + " " + "is" + " " + total);

document.write('<br>')

var num1 = 84;
var num2 = 9;
var total = num1 % num2;
document.write("The modulus of" + " " + num1 + "%" + num2 + " " + "is" + " " + total);

document.write('<br>');


document.write('<br>');
document.write('<br>');




// 3
var math = 5;
document.write("Initial value is " + math);

document.write('<br>');

var incre = ++math;
document.write("Increment value is " + incre);

document.write('<br>');

var add = incre + 7;
document.write("Value after addition is " + add);

document.write('<br>');

var decre = --add;
document.write("Decrement value is " + decre);

document.write('<br>');

var mod = decre % 3;
document.write("The reminder is " + mod);



document.write('<br>');
document.write('<br>');


var tick = 600;
var persons = 5;
document.write("Total cost to buy " + persons + " tickets to a movie is" + " " + persons * tick);


document.write('<br>');
document.write('<br>');

// table

var ask = prompt("Table number please");
var number = ask;
var table = "";


for (let i = 1; i <= 10; i++) {
    table += number + " x " + i + " = " + (number * i) + "<br>";
}
document.write("<h2>Table of " + number + ":<br>" + table + "</h2>");

document.write('<br>');
document.write('<br>');

// temp

var celsiusTemp = prompt("celsiusTemperature please");

var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
console.log(celsiusTemp + "C" + " " + "is" + " " + fahrenheitTemp + "F");

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemp = prompt("cfahrenheitTemperature please");

// d. Convert it to Celsius & output "NNoF is NNOC".
celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
console.log(fahrenheitTemp + "F" + " " + "is" + " " + celsiusTemp + "C");


