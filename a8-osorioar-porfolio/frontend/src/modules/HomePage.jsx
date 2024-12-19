import '../App.css'
import { FaComputer } from "react-icons/fa6";


function HomePage(){
    return (
        <>
            <h2>Welcome to my Tech Journey! <FaComputer className="home-icon"/></h2>
            <article>
                <h2>Discover My Aspirations</h2>
                <p>I'm an aspiring  software engineer, passionate about building innovative solutions in fields like robotics, space exploration, and AI.
                    My ultimate goal is to work at companies like SpaceX, Tesla, or NASA, contributing to groundbreaking advancements.
                </p>

                <h2>Technologies Behind This Website</h2>
                <p>Throughout this course, I have learned and implemented a variety of technologies and concepts. Here are some highlights:</p>
                <ul>
                    <li>HTML for semantic structure and accessibility.</li>
                    <li>CSS for responsive and visually appealing design.</li>
                    <li>JavaScript for interactiviy and logic.</li>
                    <li>React.js for building dynamic user interfaces.</li>
                    <li>Node.js and Express.js for server-side functionality.</li>
                    <li>MongoDB for database management.</li>
                    <li>Version control with Git for collaborative development.</li>
                    <li>RESTful APIs for client-server communication.</li>
                </ul>

                <h2>What's Next?</h2>
                <p>
                    I'm excited to dive deeper into advanced technologies using cloud-based solutions.
                    Stay tuned for more projects!
                </p>
            </article>
        </>
    );
}
export default HomePage;