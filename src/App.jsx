import { React, useEffect, useState } from "react";
import { Routes, Route, Link, Outlet, NavLink, Navigate } from "react-router-dom";
// import CurrencySwitcher from "./Components/CurrencySwitcher";
// import Display from "./Components/Display";
import Home from "./Components/Home";
import Form from "./Components/Form";
import JokesApi from "./Components/JokeApi";
import BoredApi from "./Components/Boredapi";
import Register from "./Components/Register"
import Login from "./Components/Logins";
import ApiMeaning from "./Components/ApiMeaning";


// import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("false");

    useEffect (() => {
      const user = localStorage.getItem("user");
      if (user) {
        setIsLoggedIn(true);
      }
    }, []);
  
    const handleLogin = (user) => {
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
    };
    const handleLogout = () => {
      localStorage.removeItem("user");
      setIsLoggedIn(false);
    };
    
    const ProtectedRoute = ({path, element}) => {
      return isLoggedIn ? element : <Navigate to= "/login" />
    } 


  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="form">Form</Link>
        <Link to="jokes-api">Jokes</Link>
        <Link to="Bored-api">Bored</Link>
        <Link to="Register">Register</Link>
        <Link to="Api-meaning">Api Meaning</Link>
        <li>{isLoggedIn ? (<button onClick={handleLogout}>Logout</button>) : <link to= "login"></link>}</li>

      </nav>
      <h1>This is a basic Router Setup
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="jokes-api" element={<JokesApi />} />
        <Route path="Bored-api" element={<BoredApi />} />
        <Route path="Register" element={<Register/>} />
        <Route path="Login" element={isLoggedIn ? <Navigate to ="/" /> : <Login onLogin ={handleLogin} />} />
        <Route path="Api-meaning" element={<ProtectedRoute path="api-meaning" element={<ApiMeaning />} />} />
      </Routes>
    </div>
  );
}

export default App;
