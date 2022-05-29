import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
      <BrowserRouter>
      <Routes>
          <Route path="rawtx" element={<App />} />
          <Route path="signtx" element={<signTx ></signTx>} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
