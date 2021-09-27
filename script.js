const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailUser = document.getElementById("emailUser");
const passwordUser = document.getElementById("passwordUser");


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    //get the values
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailUserValue = emailUser.value.trim();
    const passwordUserValue = passwordUser.value.trim();

    if(firstNameValue === ''){
        //show error
        setErroFor(firstName, "First name cannot be empty")
    }
    else{
        //show sucess
        setSucessMsg(firstName);
    }

    if(lastNameValue === ''){
        //show error
        setErroFor(lastName, "Last name cannot be empty")
    }
    else{
        //show sucess
        setSucessMsg(lastName);
    }
    if(passwordUserValue === ''){
        //show error
        setErroFor(passwordUser, "Password cannot be empty")
    }
    else{
        //show sucess
        setSucessMsg(passwordUser);
    }
    if(emailUserValue === ''){
        //show error
        setErroFor(emailUser, "email cannot be empty")
    }else if (!validateEmail(emailUserValue)) {
		emailInvalid(emailUser, 'Not a valid email');
    }
    else{
        //show sucess
        setSucessMsg(emailUser);
    }
}


function setErroFor(tag, message) {
	const formControl = tag.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
    small.innerText = message;
}

function emailInvalid(tag, message) {
	const formControl = tag.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
    small.innerText = message;
}


function setSucessMsg(tag){
    const formControl = tag.parentElement;
    formControl.className = 'form-control sucess';
}

function validateEmail(email) {
    const re = /^([\.\_a-zA-Z-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,8})$/
    return re.test(email);
}

