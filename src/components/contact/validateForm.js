const validateForm = (values) => {
    let errors = {}
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    for (let value in values) {
        if (!values[value]) {
            errors[value] = "Required"
        } else {
            if (!emailPattern.test(values.email)) {
                errors.email = "Invalid email. Please try again."
            }
        }
    }

    return errors;
}

export default validateForm;