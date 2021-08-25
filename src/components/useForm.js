import { useState, useEffect } from "react";

const useForm =(callback,Validate) => {
    const [values, setValues] = useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const [error,setError] = useState({});
    const [isSubmit, setIsubmit] = useState(false);
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...value,
            [name]:value
        }
        )
    };
    const handleSubmit = e => {
        e.preventDefault();
        setError(Validate(values));
        setIsubmit(true);
    };


    useEffect(() => {
        if (Object.keys(error).length === 0 &&
            isSubmit) {
            callback();
        }
    }, [error]);
    return { handleChange,values,handleSubmit,error};
}

export default useForm;