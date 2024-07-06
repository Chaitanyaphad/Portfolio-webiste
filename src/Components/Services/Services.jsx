import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My experties in fields</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                    <div className="services-format">
                        <a href="#" className='card'>
                            <h3>1</h3>
                            <h2>Data Science</h2>
                            <div className="services-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </a>
                    </div>

                    <div className="services-format">
                        <a href="#" className="card">
                            <h3>2</h3>
                            <h2>Machine Learning</h2>
                            <div className="services-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </a>
                    </div>

                    <div className="services-format">
                        <a href="#" className="card">
                            <h3>3</h3>
                            <h2>Front-end Development</h2>
                            <div className="services-readmore">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </a>
                    </div>
            </div>

        </div>
    )
}

export default Services