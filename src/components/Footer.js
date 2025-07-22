import React from 'react';
import '../styles/Footer.css';
import footLogo from '../assets/images/AdityaTechNDevoopsICON.png';
import MailIcon from '@mui/icons-material/Mail';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LaunchIcon from '@mui/icons-material/Launch';
// import PhoneInTalk from '@mui/icons-material/PhoneInTalk';


function Footer() {

  return (
    <div className='footer'>
      <div className='footerBody'>
        <div className='footerBox'>
          <div className='footHero'>
            <img src={footLogo} className='footLogo' alt='Aditya_Tech_&_Devoops-logo'/>
            <span className='footHeroText'>
              <h2 className='companyName'>Aditya Tech. & Devoops.</h2>
              <p className='tagline'>Incorporating AI Innovations in Z+ ERA</p>
            </span>
          </div>
          <p>Royal Grey Enterprises</p>
        </div>
        <div className='footerLinks'>
          <div className='sections'>
            <div className='heading'>
              Helpful Links
            </div>
            <a href='/t&c#intro' className='links'>FAQs</a>
            <a href='/help' className='links'>Help & Support</a>
            <a href='terms-conditions' className='links'>Terms & Conditions</a>
          </div>
          <div className='sections social'>
            <div className='heading'>
              Social
            </div>
            <a href='https://www.instagram.com/adi.dev.aditya' target='__blank' className='links ig'><InstagramIcon/><span className='s-lable'>Instagram</span></a>
            <a href='https://www.facebook.com/profile.php?id=61556642915726' target='__blank' className='links fb'><FacebookIcon/><span className='s-lable'>Facebook</span></a>
            <a href='https://wa.me/+917985693955?text=HI!%20I%20want%20to%20know%20more%20about%20Aditya%20Tech.%20%26%20Devoops.' target='__blank' className='links wa'><WhatsAppIcon/><span className='s-lable'>WhatsApp</span></a>
          </div>
          <div className='sections'>
            <div className='heading'>
              Reach Us
            </div>
            <a href='mailto:professionaladitya25@gmail.com' className='links mail'><MailIcon/>E-mail</a>
            <a href='https://wa.me/+917985693955?text=HI!%20I%20want%20to%20know%20more%20about%20Aditya%20Tech.%20%26%20Devoops.' target='__blank' className='links wa'><WhatsAppIcon/>WhatsApp</a>
            
          </div>
          <div className='sections'>
            <a href="/contact" className='links'>Join our team</a>
          </div>
          <div className='sections dev'>
            <div className='heading'>Devloper's Contact
              <a href='https://adityatechndevops.web.app' className='links' target='__blank' >Aditya Tech & Devops&nbsp;<LaunchIcon fontSize='14'/></a></div>
          </div>
          <div className='sections'>
            <div className='heading'>
              Businesses
            </div>
            <a href='https://adityatechndevoops.web.app/' className='links' target='__blank'>Aditya Tech. & Devoops.</a>
            <a href='https://adityatechndevoops.web.app/about' className='links' target='__blank'>Royal Grey Enterprises</a> 
          </div>
          
        </div>
      </div>
      <hr/>
      <p className='footerBottomText'>By continuing past this page, you agree to our Terms of Service, Cookie, Privacy, and Content Policies. All trademarks are properties of their respective owners.</p>
      <div className='footerBottom'>
        <span>Copyright-2024 &copy; All rights reserved.</span>
        <span>
          <div id="google_translate_element"></div>
        </span>
      </div>
    </div>
  )
}

export default Footer