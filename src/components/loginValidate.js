function ValidateLog(values) {
    //error message variable to hold email,password and confirm password error message
    const errorMsg = {};
    if (!values.email) {
        errorMsg.email = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errorMsg.email = "Invalid Email Address";
    }

    if (!values.password) {
        errorMsg.password = "Password Required";
    }
    
    return errorMsg;
}

export default ValidateLog;