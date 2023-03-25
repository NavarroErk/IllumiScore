import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Home></Home>
      {/* <Test></Test> */}
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
