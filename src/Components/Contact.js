import React from 'react';
import './Contact.css';
import Logo2 from '../images/logo2.png'
import facebook from '../images/faceboookkk.png'
import instagram from '../images/instagram.png'
import email from '../images/gmail.png'
import whatsapp from '../images/whatsapp.png'
import footer from '../images/footer.png'
function Contact(props) {
    return (
        <div className='contact' id='contact-us'>
            <img src={footer} className="stripe"/>
            <div className='contactUs'>
                <div className='socialMedia'>
                    <div className='first'>
                        <img src={facebook} className="icon"/>
                        <p className='text'>AllWayMatè@facebook.com</p>
                    </div>
                    <div className='first'>
                        <img src={instagram} className="icon"/>
                        <p className='text'>AllWayMatè@instagram.com</p>
                    </div>
                    <div className='first'>
                        <img src={email} className="icon"/>
                        <p className='text'>AllWayMatè@gmail.com</p>
                    </div>
                    <div className='first'>
                        <img src={whatsapp} className="icon"/>
                        <p className='text'>+961 70 837 882</p>
                    </div>
                </div>
                <img src={Logo2} className="logo2"/>
            </div>
            
        </div>
    );
}

export default Contact;