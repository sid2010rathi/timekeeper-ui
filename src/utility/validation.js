export const validateEmail = (email) => {
    if(email.length > 0) {
        return true;
    }
    return false;
}

export const validatePassword = (password) => {
    if(password.length > 0) {
        return true;
    }
    return false;
}

export const matchPassword = (password, confPassword) => {
    if(validatePassword(password) && validatePassword(confPassword)) {
        return password === confPassword ? true : false;
    }
    return false;
}

export const validateString = (string) => {
    if(string.length > 3) {
        return true;
    }
    return false;
}

export const validateWebsite = (website) => {
    if(website.length > 0) {
        return true;
    }
    return false;
}

export const validateCode = (code) => {
    if(code.length === 6) {
        return true;
    }
    return false;
}