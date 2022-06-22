import React from 'react';
import "../../Styles/ComponentStyles/Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <h2>Contactez nous sur : </h2>
            <div className="contact">
                
            <a href='mailto:adinsiabdias@gmail.com' ><i class="fa-solid fa-envelope"></i></a>
            <a href='/' ><i class="fa-brands fa-facebook-messenger"></i></a>
                <a href='/' ><i class="fa-brands fa-whatsapp"></i></a>
                <a href='/' ><i class="fa-solid fa-phone-flip"></i></a>
            </div>
            <small>Copyright c2022 by Abdias Adinsi</small>


       </div>
    );
};

export default Footer;