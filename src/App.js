import React, { useEffect } from 'react'
import './App.css';
import AppRoutes from './routes/AppRoutes.js';
import "./styles/global.css";  // Import global styles
import { initEmailJS } from './utils/sendEmailUtility.js';


function App() {
  useEffect(() => {
    initEmailJS();
  }, []);
  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

export default App;
