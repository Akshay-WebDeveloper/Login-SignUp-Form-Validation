// let username = document.getElementById('username');
// let email = document.getElementById('email');
// let password = document.getElementById('password');

// ! shortcut to select id, class
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


let username = id('username'),
    email = id('email'),
    password = id('password'),
    form = id('form'),
    errorMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");

})

let engine = (id, index, message) => {
    if (id.value.trim() === '') {
        errorMsg[index].innerHTML = message;
        successIcon[index].style.opacity = 0;
        failureIcon[index].style.opacity = 1;
    }
    else {
        errorMsg[index].innerHTML = "";
        failureIcon[index].style.opacity = 0;
        successIcon[index].style.opacity = 1;
    }
}