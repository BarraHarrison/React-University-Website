import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const about = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>

            <div className="about-right">
                <h3>About University</h3>
                <h2>Nurtering Tomorrow's Leaders Today</h2>
                <p>
                    Embark on a transformative educational journey with our university's
                    comprehensive educational programmes. Our cutting-edge curriculum
                    is designed to empower students with the knowledge, skills and
                    experiences needed to excel in the dynamic field of education.
                </p>
                <p>
                    With a focus on innovation, hands-on learning and personalized mentorship,
                    our programmes prepare aspiring educators to make a meaningful impact in classrooms,
                    schools and communities
                </p>
                <p>
                    Whether you aspire to become a teacher, administrator, counsellor or educational
                    leader, our diverse range of programmes offers the perfect pathway to achieve your
                    goals and unlock your full potential in shaping the future of education.
                </p>
            </div>
        </div>
    )
}

export default about
