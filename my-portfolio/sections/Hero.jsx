import "../css/Hero.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import heroImage from "../assets/hero.png"; // your hero image

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-text">
                <h1>Hello, I’m <span>Sharanya !</span></h1>
                <p>Full Stack Developer | React | Java | Spring Boot | MySQL</p>




                {/* CTA Buttons */}

                <div className="cta">
                    <a href="#projects" className="btn">View Projects</a>
                    <a href="/resume.pdf" download className="btnOutline">Resume</a>
                </div>



                {/* Social Icon Buttons */}
                <div className="social-buttons">

                    <a href="https://www.linkedin.com/in/sharanya-nemade-50764b193" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/SharanyaNemade" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="mailto:sharanyanemade123@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>



            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Hero" />
            </div>
        </section>
    );
}
