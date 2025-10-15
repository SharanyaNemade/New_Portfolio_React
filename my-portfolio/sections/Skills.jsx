import "../css/Skills.css";
import reactLogo from "../assets/react.png";
import javaLogo from "../assets/java.png";
import springbootLogo from "../assets/spring-boot.png";
import mysqlLogo from "../assets/mysql.png";
import dockerLogo from "../assets/docker.svg";

export default function Skills() {
    const skills = [
        { name: "React", icon: reactLogo },
        { name: "Java", icon: javaLogo },
        { name: "Spring Boot", icon: springbootLogo },
        { name: "MySQL", icon: mysqlLogo },
        { name: "Docker", icon: dockerLogo },
    ];

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="grid">
                {skills.map((s, i) => (
                    <div key={i} className="card">
                        <img src={s.icon} alt={s.name} />
                        <p>{s.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
