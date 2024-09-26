import React, { useRef } from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Emily Carter</h3>
                                    <span>California, USA</span>
                                </div>
                            </div>
                            <p>
                                The experience with Edusity has been amazing. The instructors
                                are very knowledgeable, and the resources provided have helped
                                me stay ahead in my field. It has been a wonderful journey.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Daniel Hernandez</h3>
                                    <span>Colorado, USA</span>
                                </div>
                            </div>
                            <p>
                                I could not have asked for a better platform than Edusity.
                                The balance between practical knowledge and theoretical
                                concepts is excellent. I feel prepared for my career ahead.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Mary Watson</h3>
                                    <span>Virginia, USA</span>
                                </div>
                            </div>
                            <p>
                                Edusity offers an incredible learning environment. The flexible
                                schedules and experienced tutors have made it easy to balance
                                my studies with work. I am very satisfied with the experience.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>John Woods</h3>
                                    <span>Michigan, USA</span>
                                </div>
                            </div>
                            <p>
                                From the moment I joined Edusity, I knew it was the right choice.
                                The platform is intuitive, and the courses are designed to give
                                practical knowledge that I can apply immediately in my job.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default testimonials
