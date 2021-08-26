import React from 'react'

function validate(values) {
    let errorMsg = {};
    if (!values.emails) {
        errorMsg.emails = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(values.emails)) {
        errorMsg.emails = "Invalid Email Address";
    }
    if (!values.password) {
        errorMsg.password = "Password Required";
    } else if (values.password.length < 5) {
        errorMsg.password="Use Strong Password"
    }
    if (!values.confirmPassword) {
        errorMsg.confirmPassword = "Please Confirm your Password";
    } else if (values.password !== values.confirmPassword) {
        errorMsg.confirmPassword = "Passwords Don't Match";
    }
    return errorMsg;
}

export default validate
