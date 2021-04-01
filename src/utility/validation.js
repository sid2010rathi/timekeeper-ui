export const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

export const validatePassword = (password) => {
    const regex =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    /*
    (?=.*[0-9]) - Assert a string has at least one number;
    (?=.*[!@#$%^&*]) - Assert a string has at least one special character.
     */
    return regex.test(password);
}

export const matchPassword = (password, confPassword) => {
    return password === confPassword ? true : false;
}

export const validateString = (string) => {
    if(string.length > 3) {
        return true;
    }
    return false;
}

export const validateWebsite = (website) => {
    const regex = /^((https?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    return regex.test(website);
}

export const validateCode = (code) => {
    if(code.length === 6) {
        return true;
    }
    return false;
}

export const validateFirstName = (firstname) => {
    if(firstname.length > 1) {
        return true;
    }
    return false;
}


export const validateLastName = (lastname) => {
    if(lastname.length > 1) {
        return true;
    }
    return false;
}

export const validateNumber = (number) => {
    if(isNaN(number) && number.length < 5) {
        return false;
    }
    return true;
}

export const validatePhone = (number) => {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return regex.test(number);
}