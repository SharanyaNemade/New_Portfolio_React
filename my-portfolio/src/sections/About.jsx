import "../css/About.css";

export default function About() {
    const skills = ["React", "Java", "Spring Boot", "MySQL", "BootStrap5", "CSS3", "HTML5", "Git", "Docker", "REST APIs",
        "Agile Methodologies", "SDLC"
    ];

    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <p>
                Motivated and enthusiastic full stack developer with a strong foundation in both frontend and backend technologies.
                Skilled in HTML, CSS, JavaScript, React.js, Java, Spring Boot, Hibernate, MySQL, Git, and Docker. Hands-on
                experience in building scalable web applications, integrating APIs, and designing robust backend systems. Passionate
                about continuous learning and eager to contribute to impactful projects in dynamic environments.
            </p>

            {/* Skills badges */}
            <div className="skills-badges">
                {skills.map((skill, index) => (
                    <span key={index}>{skill}</span>
                ))}
            </div>
        </section>
    );
}
