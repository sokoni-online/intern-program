
function validate(values) {
    //error message variable to hold email,password and confirm password error message
    const errorMsg = {};

    if (!values.email) {
        errorMsg.email = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errorMsg.email = "Invalid Email Address";
    }

    if (!values.password) {
        errorMsg.password = "Password Required";
    } else if (values.password.length <6) {
        errorMsg.password="Use Strong Password"
    }
    
    if (!values.confirmPassword) {
        errorMsg.confirmPassword = "Please Confirm your Password";
    }
     else if (values.confirmPassword !== values.password) {
        errorMsg.confirmPassword = "Passwords Don't Match";
    }
    return errorMsg;
} 

export default validate;
