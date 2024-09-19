import { useState } from 'react';
import './App.css';
// import ModeButton from './components/ModeButton';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  // BrowserRouter not well suited for GitHub pages
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // document.title = "textUtils - Dark Mode";
    }
    else {
      setMode('light');
      // document.title = "textUtils - Light Mode";
    }
  };

  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = () => {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  return (
    <>
      <Router>
      <Navbar title='textUtils' aboutText='About textUtils'/>
      <Alert alert={alert} />

        
        <Routes>
          <Route exact path='/'
          element = { <TextForm heading = 'Enter your text below' mode={mode} showAlert = {showAlert}/>
        }/>
          <Route exact path="/about" 
          element = {<About />}
          />

        </Routes>

      {/* <ModeButton mode = {mode} toggleModeParent = {toggleMode}/> */}
      
      </Router>
    </>
  );
}
export default App;