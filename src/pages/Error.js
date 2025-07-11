import React, { useState, useEffect } from 'react';
import "../styles/Error.css";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';



function Error404() {

   const [cursor, setCursor] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const handleMouseMove = (e) => {
        setCursor({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
   }, []);

   const overlayStyle = {
      background: `radial-gradient(ellipse 300px 300px at ${cursor.x}px ${cursor.y}px, #ffffff00 0%, rgba(0,0,0,2) 100%)`,
   };

   return (
      <div className='errorPage'>
         <div class="errContainer">
            <span class="errHead">Oops! <code>Lost on web? </code></span>
            <Stack className='errStack' spacing={0}>
               <Alert className='alert' severity="error">
                  <AlertTitle style={{"font-size":18}}>Error 404 : Page not found.</AlertTitle>
                     <p class="errPara">
                        You are seeing this because, this page might be removed or moved to another hyperlink.
                     </p>
               </Alert>
               <div class="errFoot">
                  {/* <ArrowBackIcon/> */}
                  <div class="btns">
                     <a href="/sitemap" className='errBtn priorL' >Site Map</a>
                     <a href="/home" className='errBtn priorH' >Return Home</a>
                  </div>
               </div>
            </Stack>
         </div>
         <div class="overlay" style={overlayStyle}></div>
      </div>
   )
}

export default Error404;