import "../css/Projects.css";

export default function Projects() {
    const projects = [
        {
            title: "Student, Course and Enrollment Management System",
            desc: [
                "Developed a full-stack Student & Course Management platform using Spring Boot, MySQL, and Thymeleaf.",
                "Managed student profiles, course enrollment, and attendance workflows.",
                "Implemented RESTful APIs with layered architecture (Controller–Service–Repository) and role-based access via Spring Security."
            ],
            link: "#"
        },
        {
            title: "Book Management System",
            desc: [
                "Designed a full-stack application with authentication and CRUD functionality.",
                "Built REST APIs and integrated frontend with backend.",
                "Implemented Spring Security for user management."
            ],
            link: "#"
        },
        {
            title: "Vehicle Selling by Escrow",
            desc: [
                "Developed a secure vehicle transaction platform ensuring buyer-seller trust.",
                "Handled transaction workflows and database integration."
            ],
            link: "#"
        },
        {
            title: "Portfolio Website Using React",
            desc: [
                "Implemented dynamic routing and state management to handle multi-page navigation and interactive project sections.",
                "Developed a responsive personal portfolio website using React components to showcase projects, skills, and achievements with reusable modular UI elements."
            ],
            link: "#"
        },
    ];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="grid">
                {projects.map((p, i) => (
                    <div key={i} className="card">
                        <h3>{p.title}</h3>
                        {p.desc.map((line, idx) => (
                            <p key={idx}>{line}</p>
                        ))}
                        <a href={p.link} target="_blank" rel="noopener noreferrer">View</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
