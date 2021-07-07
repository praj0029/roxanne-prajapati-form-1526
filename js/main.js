// Variable that store the reference for the form inputs
let fullname_input = document.getElementById("full-name");
let email_input = document.getElementById("email");
let message_input = document.getElementById("message");
let form = document.getElementById("form-assignment");

// Variable that store regular expression for email
let email_patterm = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/; 

/**
 * validateForm is a function that validate the form
 */
function validateForm(e){
    e.preventDefault();
    let error = [];
    let form_data = {};

    // trim whitespaces
    fullname_input.value.trim();
    email_input.value.trim();
    message_input.value.trim();

    // check if full name is not empty
    if(fullname_input.value !== ""){
        form_data.fullname = fullname_input.value

    // otherwise add an error message if full name is empty    
    }else{
        error.push("Missing Full name");
    }

    // check if email is not empty
    if(email_input.value !== ""){

        // check if email is invalid
        if(email_patterm.test(email.value)){
            form_data.email = email.value;
        }else{
            error.push(`${email.value} is an invalid email address`);
        }
        
    // otherwise add an error message if email is empty      
    }else{
        error.push("Missing email");
    }

    // check if message is not empty
    if(message_input.value !== ""){
        form_data.message = message.value

    // add an error message if message is empty   
    }else{
        error.push("Missing message");
    }

    
    // check number of error and print if array is not empty
    if(error.length > 0){
        console.log(error);
    
    //otherwise print the date submitted in forms then reser the form values
    }else{
        console.log(form_data);
        form.reset();
    }

}

window.onload=function(){
    // Register form on submit event.
    form.addEventListener('submit', validateForm, false);
}


