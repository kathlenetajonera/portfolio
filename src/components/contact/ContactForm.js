const ContactForm = () => {
    return (
        <form className="form">
            <div className="form__wrapper">
                <div className="form__group">
                    <input 
                        type="text" 
                        className="form__field" 
                        placeholder="Name" 
                        name="name"
                    />
                </div>
                <div className="form__group">
                    <input 
                        type="text" 
                        className="form__field" 
                        placeholder="Email Address"
                        name="email"
                    />
                </div>
                <div className="form__group">
                    <input 
                        type="text" 
                        className="form__field" 
                        placeholder="Email Subject"
                        name="subject"
                    />
                </div>
            </div>

            <div className="form__wrapper">
                <textarea 
                    className="form__field" 
                    cols="30" 
                    rows="10" 
                    placeholder="Message..." 
                    name="message"
                />
            </div>

        </form>
    );
}
 
export default ContactForm;