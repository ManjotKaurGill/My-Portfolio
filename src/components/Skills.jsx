import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiBootstrap,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiGithub,
    SiMysql,
    SiExpress
} from 'react-icons/si';
import { RiFirebaseFill } from "react-icons/ri";

function Skills() {
    const skills = [
        { name: 'HTML5', icon: <SiHtml5 color="#e34c26" /> },
        { name: 'CSS3', icon: <SiCss3 color="#264de4" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#f0db4f" /> },
        { name: 'React', icon: <SiReact color="#61dafb" /> },
        { name: 'React Native', icon: <SiReact color="#61dafb" /> },
        { name: 'Bootstrap', icon: <SiBootstrap color="#563d7c" /> },
        // { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
        // { name: 'MongoDB', icon: <SiMongodb color="#4db33d" /> },
        // { name: 'Express', icon: <SiExpress color="#68a063" /> },
        // { name: 'Node', icon: <SiNodedotjs color="#68a063" /> },
        { name: 'Firebase', icon: <RiFirebaseFill color="rgba(251, 6, 6, 1)" /> },
        // { name: 'Git & GitHub', icon: <SiGithub color="#333" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479a1" /> },
    ];

    return (
        <section id="skills" className="py-5" data-aos="fade-up">
            <div className="container">
                <h2 className="text-center fw-bold mb-4">Skills</h2>
                <div className="row justify-content-center">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3 mb-3">
                            <div className="p-3 text-center shadow-sm rounded border skill-card">
                                <span className="me-2 fs-4">{skill.icon}</span>
                                {skill.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
