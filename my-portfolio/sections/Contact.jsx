import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = document.querySelectorAll(".contact-form, .contact-socials");
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" className="contact">
            <h2>Let's Connect</h2>
            <p className="contact-subtitle">I’d love to hear about your project. Let’s get in touch!</p>

            <form className="contact-form hidden">
                <div className="form-group">
                    <input type="text" id="name" required placeholder=" " />
                    <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-group">
                    <input type="email" id="email" required placeholder=" " />
                    <label htmlFor="email">Your Email</label>
                </div>
                <div className="form-group">
                    <textarea id="message" rows="5" required placeholder=" "></textarea>
                    <label htmlFor="message">Your Message</label>
                </div>
                <button type="submit">Send Message</button>
            </form>

            <div className="contact-socials">
                <a href="mailto:sharanyanemade123@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
                <a href="tel:+918450914743" target="_blank" rel="noopener noreferrer">
                    <FaPhone />
                </a>
                <a href="https://www.linkedin.com/in/sharanya-nemade-50764b193" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/SharanyaNemade" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>

        </section>
    );
}
