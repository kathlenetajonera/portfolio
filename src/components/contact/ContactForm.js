import { useState } from 'react';
import emailjs from 'emailjs-com';
import validateForm from "./validateForm";
import InputField from './InputField';

const ContactForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({})
    const sendEmail = e => {
        emailjs.sendForm('service_yrpyh8c', 'template_8kjslye', e.target, 'user_Jx6oJaQGGz4vrpj01yPcZ')
        .then((result) => {
            console.log(result.text);
        })
        .catch((error) => {
            console.log(error.text);
        });
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const errors = validateForm(values);

        if (!Object.keys(errors).length) {
            sendEmail(e);
        } else setErrors(errors);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
                <InputField 
                    placeholder="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
                { errors.name && <p className="form__error">{ errors.name }</p> }
            </div>
            <div className="form__group">
                <InputField
                    placeholder="Email Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                { errors.email && <p className="form__error">{ errors.email }</p> }
            </div>
            <div className="form__group">
                <InputField
                    placeholder="Subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                />
                { errors.subject && <p className="form__error">{ errors.subject }</p> }
            </div>
            <div className="form__group">
                <textarea 
                    className="form__field" 
                    cols="30" 
                    rows="7" 
                    placeholder="Message..." 
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                />
                { errors.message && <p className="form__error">{ errors.message }</p> }
            </div>

            <button className="button">send</button>
        </form>
    );
}
 
export default ContactForm;