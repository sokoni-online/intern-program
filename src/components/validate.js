export default function Validate(values) {
    let errorDisplay = {};
 
    //email validation
    if (!values.email) {
        errorDisplay.email = "Email Input required";

    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errorDisplay.email = "Invalid Email Address";
    }
    
    // validate password 
    if (!values.password) {
        errorDisplay.password = "Password Required";
    } else if (values.password.length < 6) {
        errorDisplay.confirmPassword = "Password should have Atleast 6 characters";
    }
    //check matching passwords and empty field
    if (!values.confirmPassword) {
        errorDisplay.confirmPassword = "Password required";
    } else if (values.password !== values.confirmPassword) {
        values.confirmPassword = "Passwords Don't Match";
    }

    return errorDisplay;
    
}