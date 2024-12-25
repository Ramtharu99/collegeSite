import React from 'react';
import './Contact.css';
import mgs_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "746ea661-04f1-41bc-89e1-93e6a3a331f7");

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
    <h3>Send me a message <img src={mgs_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find my contact information below. Your feedback, questions, and suggestions are important to me as i strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" /> ramtharu532@gmail.com</li>
            <li><img src={phone_icon} alt="" /> +977 9820000000</li>
            <li><img src={location_icon} alt="" /> 9 Gaushala<br />Kathmandu, Nepal</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Your Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Enter your message</label>
            <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
