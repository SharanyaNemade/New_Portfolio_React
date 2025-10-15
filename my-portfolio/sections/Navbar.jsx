import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>MyPortfolio</h1>

            <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
                <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
                <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>

            <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
        </nav>
    );
}
