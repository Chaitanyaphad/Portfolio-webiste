import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg' 

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
                        <p>I am a experienced Frontend Developer with over a decade pf professional expertice in the field. Throughtout my career, I have had the privilage of collaborating with prestigious orginization, contributing to their success and growth</p>
                        <p>My Passion for Frontend development is not only reflected in my extensive experince but also in the enthusiam and dedication I bring to each project</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{width: "50%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>React JS</p> <hr style={{width: "70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p> <hr style={{width: "60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Node JS</p> <hr style={{width: "50%"}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    )
}

export default About