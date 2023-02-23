import React from 'react'
window.process = {};
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const  DIV =styled.div`
// height :317vh;
width:100%;
height:100%;
background: linear-gradient(105deg, #c500ff, #ffe100);
overflow-X: hidden;

z-index:1;

@media screen and (max-width: 800px){
  background: linear-gradient(92deg, #c500ff, #ffe100);
}

`
ReactDOM.createRoot(document.getElementById('root')).render(
  <DIV>
    <App />
    

  </DIV>

  
  
)


