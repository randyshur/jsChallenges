/*
Challenge 5

 build a calculator that can take in two values 
 and, based on the button click, 
 you would be able to display the results below
*/
function displayError(msg) {
    document.getElementById("formError").style.display = 'block';
    document.getElementById("formError").innerText = msg;
}

function calculate(operator) {

    let num1 = document.getElementById("num1").value.trim();
    let num2 = document.getElementById("num2").value.trim();

    //validate
    if  (operator =="c") {
        
        document.getElementById("num1").value = '';
        document.getElementById("num2").value = '';
        document.getElementById("formError").style.display = 'none';
        document.getElementById("formResult").style.display = 'none';

    } else if (num1 == '' || num2 == '' ) {
        displayError('Please enter both numbers');


    } else {

    //do calculation
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let equation = num1 + operator + num2;

    document.getElementById("formResult").innerText = eval(equation);

    //display result
    document.getElementById("formError").style.display = 'none';
    document.getElementById("formResult").style.display = 'block';
    }
}

document.getElementById("plus").addEventListener('click', event => {
    event.preventDefault();
    calculate('+');
});

document.getElementById("minus").addEventListener('click', event => {
    event.preventDefault();
    calculate('-');
});

document.getElementById("multiply").addEventListener('click', event => {
    event.preventDefault();
    calculate('*');
});

document.getElementById("divide").addEventListener('click', event => {
    event.preventDefault();
    calculate('/');
});

document.getElementById("modulo").addEventListener('click', event => {
    event.preventDefault();
    calculate('%');
});

document.getElementById("c").addEventListener('click', event => {
    event.preventDefault();
    calculate('c');
});