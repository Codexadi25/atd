import React from 'react';
import "../styles/Error.css";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function ErrorComponent({errorCode, errorMessage, errorDescription, errorReportBtn}) {
   
   // const [errCode, setErrCode] = useState("0x000")
   // const [errMsg, setErrMsg] = useState("An unknown error occured.")
   // const [errDesc, setErrDesc] = useState("You are seeing this because, an unknown error occured or this link might be broken removed or moved to another hyperlink.")

   // setErrCode(errorCode)
   // setErrMsg(errorMessage)
   // setErrDesc(errorDescription)

  return (
    <div>
      <div class="errContainer">
         <span class="errHead">Oops! <code>Something went wrong. </code></span>
         <Stack className='errStack' spacing={0}>
            <Alert className='alert' severity="error">
               <AlertTitle style={{"font-size":18}} on>Error {errorCode} : {errorMessage}</AlertTitle>
                  <p class="errPara">
                     {errorDescription}
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
    </div>
  )
}

export default ErrorComponent