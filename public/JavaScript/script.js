const inputFields = document.querySelector('form');
const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

inputFields.addEventListener('submit', e => {
    
    const email = inputFields.email.value;
    const password = +inputFields.password.value;
    const password2 = +inputFields.password2.value;

    if (!re.test(email)) {
        e.preventDefault();
        document.querySelector('.email-warning').classList.add('e-warning');
    } else if (password !== password2) {
        e.preventDefault();
        document.querySelector('.password-warning').classList.add('p-warning');
    } else if (!inputFields.checkBox.checked) {
        e.preventDefault();
        document.querySelector('.terms-warning').classList.add('t-warning');
    }

});