import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';
import Landing from './pages/Landing/Landing';
import Layout from './pages/Layout/Layout'



function App() {


  return (
    <React.Fragment>
    <Header/>    
    {/* <Landing/> */}
    <Home/>
    {/* <Test/> */}
    <Footer/>
    </React.Fragment>
  );
}


export default App;
