import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import SecondGeneration from './Views/SecondGeneration.js'
import ThirdGeneration from './Views/ThirdGeneration.js'
import FourthGeneration from './Views/FourthGeneration.js'
import FifthGeneration from './Views/FifthGeneration.js'
import SixthGeneration from './Views/SixthGeneration.js'
import SeventhGeneration from './Views/SeventhGeneration.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/secondgeneration" element={<SecondGeneration />} />
      <Route path="/thirdgeneration" element={<ThirdGeneration />} />
      <Route path="/fourthgeneration" element={<FourthGeneration />} />
      <Route path="/fifthgeneration" element={<FifthGeneration />} />
      <Route path="/sixthgeneration" element={<SixthGeneration />} />
      <Route path="/seventhgeneration" element={<SeventhGeneration />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
