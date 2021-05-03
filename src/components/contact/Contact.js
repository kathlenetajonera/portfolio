import Container from "../wrapper/Container";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <Container title="CONTACT.">
            <p className="contact__text">Reach me out through my email, <span className="contact__text--emphasis">kathlene.tajonera@gmail.com</span>, or send it here.</p>

            <ContactForm />
        </Container>
    );
}
 
export default Contact;