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