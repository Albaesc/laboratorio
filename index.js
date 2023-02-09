const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const contraseña = document.getElementById('contraseña');
const contraseña2 = document.getElementById('contraseña2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const contraseñaValue = contraseña.value.trim();
    const contraseña2Value = contraseña2.value.trim();

    if(nombreValue === '') {
        setError(nombre, 'Rellene este campo');
    } else {
        setSuccess(nombre);
    }

    if(emailValue === '') {
        setError(email, 'Rellene este campo');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email inválido');
    } else {
        setSuccess(email);
    }

    if(contraseñaValue === '') {
        setError(contraseña, 'Rellene este campo');
    } else if (contraseñaValue.length > 8 ) {
        setError(contraseña, 'No debe tener más de 8 caracteres')
    } else {
        setSuccess(contraseña);
    }

    if(contraseña2Value === '') {
        setError(contraseña2, 'Rellene este campo');
    } else if (contraseña2Value !== contraseñaValue) {
        setError(contraseña2, "Las contraseñas no coinciden");
    } else {
        setSuccess(contraseña2);
    }
    
    formulario.addEventListener ('submit', (e) => {
        e.preventDefault();
        if (nombreValue && emailValue && contraseñaValue && contraseña2Value)
        formulario.reset();
    });
}