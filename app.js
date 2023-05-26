
// // Chapte 1 (Alert)
// // Q 1
// // 1. Alert these following (individually):
// // I. First Name   II. Last Name  III. Email  IV. Phone Number  V. Password

alert = prompt("First Name")
alert = prompt("Last Name")
alert = prompt("Enter Email")
alert = prompt("Phone Number")
alert = prompt("Password")

// // Q 2. Correct this statement: alert"You're learning JavaScript!";

alert("You're learning JavaScript!");

// // Q 3. Code an alert statement displaying any message you like.

alert("I want's to become a professinal developer")

// // Chapter 2 (Variables for string)
// // Q 1. Declare any variable in the camelCase format.

var camelCase;

// // Q 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.

var myChoice;
myChoice = "Nothing";

// // Q 3. Declare the variable teamName and Alert your Team name.

var teamName = "H.A SQUAD";
alert(teamName);


// // Q 4. This statement has already been coded. var bestMan = "Charlie"; Assign the variable a new string.

bestMan = "Muhammad ibn abdullah. (PBUH)"


// // Chapter 3 (Variables for numbers)

// // Q 1. Declare a variable “caseQty”

var caseQty;

// // Q 2.Assign to the variable caseQty, which has already been declared, the value 144.

caseQty = 144;

// // Q 3. Rewrite this statement so the variable can be used in a math operation. var num = "9";

 var num = 9;

// // Q 4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers.

var numbers;
numbers = 2 + 3;

// // Q 5.What is the value of orderTotal?
// // var merchTotal = 100;
// // var shippingCharge = 10;
// // var orderTotal = merchTotal + shippingCharge;
// // Try it yourself.

var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
alert("the total price is " + orderTotal);

// // Q 6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by addingit together with a number.

var myNum = 5;
var newNum = myNum + 3;

// // Chapter 4 (Variable names Legal and Illegal)

// // Q 1. Correct this statement. var product cost = 3.45;

var productcost = 3.45;

// // Q 2. Rewrite this using camelCase. var Nameofband;

var nameOfBand; 


// // Q 3. In a single statement declare a legally-named variable and assign a number to it.

var legallyName = 18;


// // Q 4. Declare a variable that is a combination of your first and last names. Use camelCase.

var hunainAfzal;

// // 5. List the legal and Illegal Variables.


// // legal variables
 var $name;
 var age1;
 var _gender;
 var  qulification;
 var school;

// // illegal variables 
// //  var 9name;
// // var go-it;
// // var -qulification
// // var 110000;
// // var po st;


// // Chapter 5 (Math Expression I)

// // Q 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?

// // ans 
// // modulas 

// // Q 2. What is the value of num? var num = 20 % 6;

var  num = 20 % 6;
console.log(num)

// // Q 3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.

var largeNum = 1000 * 2000
alert(largeNum);

// // Q 4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable

var totalValue = 15000;
var discountValue = totalValue/100*25;
var price = totalValue - discountValue;
console.log(price);

// Q 5. Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.

var remainder = 50 % 7; 
console.log(remainder)


// Q6. Code an alert that displays the result of a multiplication on 2 numbers.

var multiplication = 2 * 3;
alert(multiplication);

// Chapter 6 (Math Expression II)
// Q 1. Code a short form of x = x + 1; Use either of the two legal expressions.

var x = x++;

// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?

var x = 100;
x = --x
alert(x)


// Q 3. var x = 50; var y = x++; What is the value of y?

var x = 50;
var y = x++;
console.log(y)
// y = 50

// Q 4. var y = 50; var z = --y; What is the value of z?

z = 49;


// Q 5. In a single statement, decrement num and assign its original value to newNum.

var Num = 10;
var newNum = --num;

// Q 6. In a single statement add 1 to a variable and assign its original value to another variable.

var num1 = 5;
var num2 = num1++;

// q 7. Assign a number value to a variable. Increment the variable.Display the new value in an alert

var variable1 = 8;
var variable2 = ++variable1;
alert(variable2);

// Chapter 7 (Math Expression III)

// Q 1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?

calculatedNum = 14;

// Q 2. var calculatedNum2 = (2 + 2) * 6; What is the value of calculatedNum2?

calculatedNum2 = 24; 

// Q 3. var calculatedNum3 = (2 + 2) * (4 + 2); What is the value of calculatedNum3?

calculatedNum3 = 24;

// Q 4. var calculatedNum4 = ((2 + 2) * 4) + 2; What is the value of calculatedNum4?

calculatedNum4 = 10;

// Q 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.

var cost = (2 + 2) * (4 + 10);

// Q Write a statement that assigns to unit the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.

var unit = 2 + (2 * 4) + 10;

// Q 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.

var pressure = "8 not 5"


// Chapter 8 (Concatenating Text Strings)

// Q 1. var num = "2" + "2"; What is the value of num? Include quotation marks.

var phat = "2" + "2";
document.write(phat)

// Q 2. message = ("Hello," + "Dolly");What is the value of message? (Include the quotation marks.)Alert the statement

var message = ("hello," + "dolly")
var message = alert(message);
// hello,dolly

// Q 3. alert("33" + 3); What message displays in the alert box?

var value = ("33" + 3);
alert(value);

// Q 4. Write an alert that displays the concatenation of the two parts of  "Pakistan Zindabad".

var name = "pakistan "+"zindabad"
alert(name)

// Q 5. Write a statement that assigns to a variable the concatenation of a string with a number

var concat = "hello " + 3;
alert(concat);

// Q 6. Assign strings to two variables. Then concatenate them and assign the result to a third variable.

var first = "pakistan ";
var second = "zindabad";
var third = first + second;

// Chapter 9 (Prompts)

// Q 1. Code a prompt with the message "Enter first name". The user's response is assigned to firstName.

var firstName = prompt("Enter first name")

// Q 2. Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.

var country = prompt("country ? ", "China")

// Q 3. Correct this statement var yourName = prompt(Enter Your Name");

var yourName = prompt("Enter  Your Name")

// Q 4. Code a prompt that specifies a string as the message Include a default input.

var equal = prompt("I love you !")

// Q5. Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable.

var first_1 = "Enter your Name "
var second_2 = "First Name"

var third_3 = prompt(first_1 , second_2)

// Q 6. Display a prompt, including both a message and a default response.Display the user's response in an alert.

var Ques = prompt("Enter Your Age","12 years")
alert(Ques);

// Chapter 10 (if statments)

// Q 1. var city = "Karachi"if (city = "Karachi") {console.log("The City OF Lights")Correct the above statement:Also try this statement by yourself

var city = "karachi";
if (city === "karachi"){
    console.log("The city of lights")
}

// Q 2. This is the first line of an if statement:if (x === y) {Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.

if (x === y){
 var Z = prompt("Enter the value of Z ?")
}

// Q 3. Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")

var ZipCode = prompt("enter zipcode" , "zipcode")
if(ZipCode === "10010"){
    alert("Karachi")
}else{
    alert("Please write correct city")
};

// Q 4. Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;

var x = 5;
if (x == 5){
    x = 1;
}

// Chapter 11 (Comparison Operators)
    
// Q 1. Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)

if (age !== ageOfUser){

}

// Q 2. Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.

if (variable1 >= variable2){
    
}

// Q 3. Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.

if (variable1 !== 6){
    variable1 = 6
};

// Q 4. Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.

if (45 !== 54){
    alert("congratulation")
}

//  Q 5. Declare 2 variables. Assign one of them your first name and the other one your lastname.Code 2 prompts, asking for your first and your last name.If your answers match the two variables, display an alert.

var firstName = "hunain"
var lastName = "afzal"
var ask = prompt("Enter your first name")
var ask2 = prompt("Enter your last name")
if(ask === firstName && ask2 === lastName){
    alert("Right")
};

// Chapter 14 (If statements nested)

// Q 1. Code an if statement enclosing a nested if. If password is not empty, then check if password is not greater than 5 , then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".


// if (password !== "") {
//     if (password.length <= 5) {
//       alert("Password must be greater than 5.");
//     } else {
//       alert("OK");
//     }
//   }
  
if(password !== ""){
    if (password.length <= 5){
        alert("password must be greater then 5.")
    }else{
        alert("ok")
   }
}

// Q 2. Try this statement by yourselfif (a === 1) {if (c === "Max") {alert("OK");}}

if ( a === 1){
    if (c === "max"){
        alert("ok")
    } 
}

// Q 3. Code the first line of an if statement that avoids the nesting above 
// by testing for multiple conditions.
// if (a === 1) {
//  if (c === "Max") {
// alert("OK");
//  }
// }

if (a === 1 && c === "max"){
    alert("ok")
};

// Q 4. Declare two variables and assign them the same number value.Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.

var one = 1;
var two = 1;
if (one === two){
    if(one <= two){
        alert("good hogya ")
    }
}
// Chapter 15 (Array I)

// Q 1. Declare an empty array.

var empty =[];

// Q 2. Code an array with 1 string element

var array = ["huanin"]

// Q 3. var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index

var alphabet = ["h","i","j","k"];
alert(alphabet[2])

// Q 4. var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.

var alphabet=["h","i","j","k", "l", "m" , "n", "o"];
document.write(alphabet.length)

// Q 5. Declare an array with one element and Add a second elementwith index in array. Create an alert whose message is the new element.

var array1 = ["One element"]
array_1[1] = ["second element"]
alert(array_1[1])

// Chapter 16 (Array II)

// Q 1. Code an array with 1 string element.Add an additional element to the array using push.Create an alert whose message is the last element.

var str = ["string"]
str.push("secString")
alert(str[1]);

// Q 2. var Alphabet=["h","i","j","k"] Remove the last element from the array Alphabet.

var Alphabet=["h","i","j","k"]
alphabet.pop();
alert(alphabet);

// 3. var Alphabet=["h","i","j","k"] Add a new element, a number, to the end of an array.

var Alphabet=["h","i","j","k"]
Alphabet.push(4)
alert(Alphabet)


// Chapter 16 (Array III)
// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].Remove the first element of an array.

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.shift()
alert(sizes);

// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].Add three number elements to the beginning of an array.

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.unshift("xxs","xs")
alert(sizes)

// Q 3. Declare an array with one element.Add a second element to the beginning of the array.Create an alert whose message is the new first element.

var ele_1 = ["S"]
ele_1.unshift("M")
alert(ele_1[1]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].Insert "L" into the array between "M" and "XL".

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
sizes.splice(2 , 0 ,"L")
alert(sizes)

// Q 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"]. Copy the first 3 sizes of the array and put them into a new array, regSizes.

var sizes = ["S", "M", "XL", "XXL", "XXXL"]
var selcSizes = sizes.slice(0,3)
alert(selcSizes);

// Q 6. var pets = ["dog", "cat", "ox", "duck", "frog"].Add 2 elements after "dog" and remove "cat", "ox", and "duck".

var pets = ["dog", "cat", "ox", "duck", "frog"]
pets.splice(1 , 3 , "bitch" , "mice")
alert(pets);

// 7. var pets = ["dog", "cat", "ox", "duck", "frog"]; Remove "cat" and "ox"

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1 ,2)
alert(pets)

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"]; Reduce it to "duck" and "frog" using slice.

var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var newPets = pets.slice(3 , 5 , "duck" , "frog")
alert(newPets)

// Chapter 17 - 20 (for Loops)
// Q 1. Write a statement in which loop is to run 10 times.

for(i = 0; i < 10; i++){
    document.write("Hello sir")
}

// Q 2. Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.

for(i = 1; i <= 12; i++){
    document.write(i+"<br>")
}

// Q 3. What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.for var i = 0 i <= 4 i i++ Note: Complete this statement by yourself

for (var i = 0; i <= 4; i++){

}

// 4. Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.

for (var x = 1; i <= 100; i++){
    document.write(i + "count")
}

// Q 5. Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.

for(var i = 3; i > 0; i--){
    document.write(i + "nn")
}

// Q 6. The statement assigns the number of elements in the array to the variable.

var pets = ["dog", "cat", "ox", "duck", "frog"];
var newPets = pets.length
alert(newPets)

// Q 7. Set a variable named “flag” with an initial Boolean value of your choice.
var flag = "true"

// Q 8. Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.

var pets = ["dog", "cat", "ox", "duck", "frog"]
for(i = 0; i < pets.length; i++){
    document.write("pets " + pets[i] + "<br>")
}

// 9. Coding Exercise: Set a for loop to run 10 iterations.On the second iteration, display the counter in an alert. (It should be 1.)Break out of the loop.

for (var i = 0; i < 10; i++){
    if(i === 5 ){
        alert("counter "+i)
        break;
    }
}
// 10. Create an array which contains user namesCode a prompt with the message "Enter first name". The user's response is assigned to firstName.Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names.Code an if statement that tests the presense of (user name) in an array.If user name match Alert that "Enter". if not then alert ("Please write correct user name").

var userName = prompt("enter first name")
var firstName = userName;
for(i = 0; i < userName.length; i++){
    if(firstName === userName[i]){
     alert("welcome "+firstName+"!")
     break; 
    }
}
if(i === userName -1){
    alert("pelese enter correct username")
}

// 11. Complete this code to display an alert if a match isn't found.
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//  if (userInput === list[i]) {
//  alert("Match found");
//  matchFound = true;
//  break;
//  }
// };

var list = ["apple", "banana", "orange"];
var userInput = prompt("Enter a fruit name");
var matchFound = false;

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("No match found");
}







// 12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
// var secondArr = [1, 2, 3, 4, 5, 6];
// Code the first line of a for loop with the usual counter, the usual 
// starting value, and the usual incrementing. Limit the number of 
// loops by the number of elements in the array firstArr.
// In the scope of main loop Code the nested loop. Limit the number 
// of nested loops by the number of elements in the array 
// secondArr.
// After that concatenate the both loops.
// Expected Output:

// a1
// a2
// a3
// a4
// …
// f6



// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];
// for(i = 0; i <= firstArr.length; i++){
//     for(x = 0; x <= secondArr.length; x++){
//     document.write(firstArr[i]+secondArr[x])
//     }
// }


