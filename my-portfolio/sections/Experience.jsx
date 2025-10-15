import "../css/Experience.css";

export default function Experience() {
    const experiences = [
        {
            role: "Full Stack Intern",
            company: "Vibgyor Advisors, Mumbai",
            period: "September 2025 - Present",
            description: ["Developed React front-end and Spring Boot backend apps."],
        },
        {
            role: "Business Development Executive",
            company: "Jaro Education, Pune",
            period: "Sep 2023 – Oct 2023",
            description: [
                "Developed prospect engagements and identified customer needs.",
                "Conducted product demos and managed client relationships (B2B/B2C).",
                "Worked on corporate sales pipelines and account management.",
            ],
        },
        {
            role: "Intern",
            company: "Zebo.ai, Pune",
            period: "Jul 2022 – Aug 2022",
            description: [
                "Contributed to the development and training of ML models.",
                "Preprocessed datasets and implemented feature engineering for improved accuracy.",
                "Assisted in code development for autonomous systems.",
            ],
        },
        {
            role: "Intern",
            company: "Mvaro, Pune",
            period: "Feb 2022 – Mar 2022",
            description: [
                "Developed and maintained embedded software for drone systems.",
                "Designed firmware for microcontrollers and performed debugging.",
                "Collaborated with stakeholders to align technical requirements with project goals.",
            ],
        }
    ];

    return (
        <section id="experience" className="experience">
            <h2>Experience</h2>
            <div className="timeline">
                {experiences.map((exp, i) => (
                    <div key={i} className="exp-card">
                        <h3>{exp.role}</h3>
                        <span>{exp.company}</span>
                        <p>{exp.period}</p>
                        <ul>
                            {exp.description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
