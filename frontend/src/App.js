import logo from './logo.svg';
import './App.css';
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </header>
    </div>
  );
}

export default App;
