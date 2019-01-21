/*
Challenge 4

1.  alert the user if they hit submit without all of the fields filled in, 
saying, "Please fill in all your fields".  

2. check the password and, if they do not match, 
the user should be alerted with "Your passwords MUST match". 

3. If all of the fields are filled in, and the passwords match, 
when the submit button is clicked, the button should become disabled.
*/
function displayError(msg) {
    document.getElementById("formError").style.display = 'block';
    document.getElementById("formError").innerText = msg
}

function submitForm() {
    document.getElementById("formButton").style.display = 'none';
    document.getElementById("formSubmit").style.display = 'block';
}
document.getElementById("myForm").addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("formError").style.display = 'none';

    let uname = document.getElementById("username").value.trim();
    let pwd = document.getElementById("password").value.trim();
    let conf = document.getElementById("confirm").value.trim();

    if (uname == '' || pwd == '' || conf == '' ) {
        displayError('Please fill in all your fields');
    } else if (pwd != conf) {
        displayError('Your passwords MUST match');
    } else {
        submitForm();
    }

});