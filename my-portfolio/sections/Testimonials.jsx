import "../css/Testimonials.css";

export default function Testimonials() {
    const feedbacks = [
        {
            name: "Ketaki Patil",
            role: "Team Lead at Kinsfolk Technology",
            text: "Sharanya consistently delivers clean, maintainable code and has an excellent understanding of modern front-end technologies. Her ability to translate complex requirements into functional UI is outstanding."
        },
        {
            name: "Pruthvi Parekh",
            role: "Project Manager at Jaro Edutech Private Limited",
            text: "Highly creative and innovative problem-solver. Sharanya proactively suggests optimizations and delivers solutions on time, which has greatly improved project efficiency."
        },
        {
            name: "Michael Lee",
            role: "Senior Developer at Zebo.ai",
            text: "Sharanya's expertise in React and full-stack development is impressive. She quickly adapts to new technologies and contributes effectively to both front-end and back-end tasks."
        },
        {
            name: "Priya Sharma",
            role: "Lead Engineer at Mvaro",
            text: "Sharanya demonstrates strong teamwork and collaboration skills. Her work on embedded systems and front-end components shows her versatility and attention to detail."
        },
        {
            name: "Rohit Kumar",
            role: "Mentor at Jaro Education",
            text: "Sharanya has excellent communication skills and can explain complex technical concepts clearly. Her ability to manage client interactions and technical deliverables simultaneously is commendable."
        }
    ];

    return (
        <section id="testimonials" className="testimonials">
            <h2>Testimonials</h2>
            <div className="cards">
                {feedbacks.map((f, i) => (
                    <div key={i} className="card">
                        <p>"{f.text}"</p>
                        <h4>- {f.name}, {f.role}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
}
