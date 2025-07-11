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
      <div className='footer__body'>
        <div className='footer__box'>
          <img src={footLogo} className='footlogo' alt='Aditya_Tech_&_Devoops-logo'/>
          <h2 className='company_name'>Aditya Tech. & Devoops.</h2>
          <n3 class="subsidiary">Grey Enterprises</n3>
          <p className='tagline'>Incorporating AI Innovations in Z+ ERA</p>
        </div>
        <div className='footer__links'>
          <div className='sections'>
            <div className='heading'>
              Helpful Links
            </div>
            <a href='/t&c#intro' className='links'>FAQs</a>
            <a href='/help' className='links'>Help & Support</a>
            <a href='terms-conditions' className='links'>Terms & Conditions</a>
          </div>
          <div className='sections'>
            <div className='heading'>
              Reach Us
            </div>
            <a href='mailto:/.com' className='links mail'><MailIcon/>E-mail</a>
            <a href='https://wa.me/+917985693955?text=HI!%20I%20want%20to%20know%20more%20about%20Aditya%20Tech%20\&%20Devoops.' target='__blank' className='links wa'><WhatsAppIcon/>WhatsApp</a>
            
          </div>
          <div className='sections'>
            <div className='heading'>
              Businesses
            </div>
            <a href='/store' className='links'>Fexo</a>
            <a href='/home' className='links'>Dhan Laxmi Enterprises</a> 
          </div>
          <div className='sections dev'>
            <div className='heading'>Devloper's Contact
              <a href='https://adityatechndevops.web.app' className='links' target='__blank' >Aditya Tech & Devops&nbsp;<LaunchIcon fontSize='14'/></a></div>
          </div>
          <div className='sections social'>
            <div className='heading'>
              Social
            </div>
            <a href='https://www.instagram.com/' target='__blank' className='links ig'><InstagramIcon/><span className='s-lable'>Instagram</span></a>
            <a href='https://facebook.com' target='__blank' className='links fb'><FacebookIcon/><span className='s-lable'>Facebook</span></a>
            <a href='https://wa.me/+917905282369?text=HI!%20I%20want%20to%20know%20more%20about%20Dhan%20Laxmi%20Enterprises.' target='__blank' className='links wa'><WhatsAppIcon/><span className='s-lable'>WhatsApp</span></a>
          </div>
        </div>
      </div>
      <hr/>
      <p className='footer__bottomText'>By continuing past this page, you agree to our Terms of Service, Cookie, Privacy, and Content Policies. All trademarks are properties of their respective owners.</p>
      <div className='footer__bottom'>
        <span>Copyright-2024 &copy; All rights reserved.</span>
        <span>
          <div id="google_translate_element"></div>
        </span>
      </div>
    </div>
  )
}

export default Footer