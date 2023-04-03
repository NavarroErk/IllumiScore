import React, { useEffect } from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Test from './pages/Test/Test';
import Landing from './pages/Landing/Landing';
import Layout from './pages/Layout/Layout'
import { useContext } from 'react';
import { UserContext } from '.';
import Cookies from 'js-cookie';



function App() {


  // const userData = useContext(UserContext);


  // const illumiScoreJWToken = Cookies.get("illumiScoreJWToken")

  

  // if (illumiScoreJWToken) {
  //   fetch(`https://73.237.65.141:8080/api/UserData/Username?username=${illumiScoreJWToken}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.username == illumiScoreJWToken) {
  //       Navigate("dashboard")
  //     } else {
  //       console.log("IT DOESNT MATCH");
  //     }
  //   })
  //   .catch(error => console.error(error))
  // }

  const userData = useContext(UserContext);
  const navigate = useNavigate();
  const illumiScoreJWToken = Cookies.get("illumiScoreJWToken");

  useEffect(() => {
    if (illumiScoreJWToken) {
      fetch(`https://73.237.65.141:8080/api/UserData/Username?username=${illumiScoreJWToken}`)
        .then(response => response.json())
        .then(data => {
          if (data.username === illumiScoreJWToken) {
            userData.isLoggedIn = true;
            console.log(userData.isLoggedIn);
            navigate("dashboard");
          } else {
            console.log("IT DOESNT MATCH");
          }
        })
        .catch(error => console.error(error))
    }
  }, [illumiScoreJWToken, navigate, userData]);
  

  return (
    <React.Fragment>
      <Landing/>
      <Home/>
    </React.Fragment>
  );
}


export default App;
