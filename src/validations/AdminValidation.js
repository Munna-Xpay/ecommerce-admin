export const adminInputValidation=(values)=>{
    const errors={};
    const email_pattern=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    const password_pattern=/^[0-9a-zA-Z@]{6,}$/

    if(values.email===""){
        errors.email="Email is required"
    }
    else if(!email_pattern.test(values.email)){
        errors.email="Enter a valid email"
    }
    if(values.password===""){
        errors.password="Password is required"
    }
    else if(!password_pattern.test(values.password)){
        errors.password="Password must contain numbers & characters only"
    }
    return errors;
}