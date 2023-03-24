import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/Landing';
import Test from './pages/Test/Test';


function App() {
  return (
    <React.Fragment>
      <Header></Header>
      {/* <Landing></Landing> */}
      <Test></Test>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
