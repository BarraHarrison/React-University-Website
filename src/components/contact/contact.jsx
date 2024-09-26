import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b5c85d40-244b-41d3-b219-b216903e7e1f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
                <p>
                    Feel free to reach out through the contact form
                    or through our contact details. Your feedback, questions
                    and suggestions are important to us as we strive to provide exceptional service
                    for our university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" /> Contact@edusity.admin</li>
                    <li><img src={phone_icon} alt="" /> +1 123-456-789</li>
                    <li><img src={location_icon} alt="" /> 78 Massachusetts St, Cambridge <br /> MA 02139, USA</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Phone number' required />
                    <label>Write your messages here</label>
                    <textarea name="message" id="" cols="30" rows="6" placeholder='Message...' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /> </button>
                </form>
                <span>{result} </span>
            </div>
        </div>
    )
}

export default Contact
