import "../css/Education.css";

export default function Education() {
    const educationList = [
        {
            degree: "Master in Java Full Stack Web Development",
            institute: "IT VEDANT, Mumbai",
            period: "Feb 2025 – Sept 2025",
        },
        {
            degree: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
            institute: "CDAC, Pune",
            period: "Mar 2024 – Sep 2024",
        },
        {
            degree: "Bachelor of Engineering (Electronics)",
            institute: "Atharva College of Engineering, Mumbai",
            period: "Aug 2019 – Jun 2023",
        },
        {
            degree: "Higher Secondary School",
            institute: "R.P. Vagh Junior College, Maharashtra",
            period: "Jun 2016 – May 2018",
        },
        {
            degree: "Secondary School",
            institute: "St. Xavier’s High School, Maharashtra",
            period: "Jun 2014 – May 2016",
        },
    ];

    return (
        <section id="education" className="education">
            <h2>Education</h2>
            <div className="timeline">
                {educationList.map((edu, i) => (
                    <div key={i} className="edu-card">
                        <h3>{edu.degree}</h3>
                        <span>{edu.institute}</span>
                        <p>{edu.period}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
