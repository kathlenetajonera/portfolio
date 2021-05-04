const ContactForm = () => {
    return (
        <form className="form">
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
            <textarea 
                className="form__field" 
                cols="30" 
                rows="7" 
                placeholder="Message..." 
                name="message"
            />

            <button className="button">send</button>
        </form>
    );
}
 
export default ContactForm;