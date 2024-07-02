import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Profile_img.png' 

const About = () => {
    return (
        <div id='about' className='about'>

            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am Chaitanya Phad, a passionate and dedicated Computer Engineering student at Vishwakarma Institute of Technology, currently in my final year of study. With a strong academic record, including a CGPA of 8.46, and a robust foundation in both theoretical and practical aspects of computer science, I am excited to apply my knowledge and skills to real-world challenges.</p>
                        <p>Throughout my academic journey, I have developed a keen interest in data science, machine learning, artificial intelligence, NLP, Database, Front-end and back-end development</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <p>Data Science</p> <hr style={{width: "60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Machine Learning</p> <hr style={{width: "65%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Front-end Developmwnt</p> <hr style={{width: "60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Back-end Development</p> <hr style={{width: "40%"}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Projects</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>250+</h1>
                    <p>Solved DSA Questions on leetcode and GFG</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>4</h1>
                    <p>Research Papers Published</p>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>8.46</h1>
                    <p>CGPA</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90.50%</h1>
                    <p>HSC</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>96.00%</h1>
                    <p>SSC</p>
                </div>
            </div>
        </div>
    )
}

export default About