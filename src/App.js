import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';
import Landing from './pages/Landing/Landing';


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Landing></Landing>
      {/* <Home></Home> */}
      {/* <Test></Test> */}
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
