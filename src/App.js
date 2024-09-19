import { useState } from 'react';
import './App.css';
import ModeButton from './components/ModeButton';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.title = "textUtils - Dark Mode";

      // setInterval(()=>{
      //   document.title = "textUtils - Dark Mode"
      // }, 2000);

      // setInterval(()=>{
      //   document.title = "Install textUtils"
      // }, 1500);


    }
    else {
      setMode('light');
      document.title = "textUtils - Light Mode";
    }
  };

  const [mode, setMode] = useState('light');
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
      <Navbar title='TextUtils2' />
      <Alert alert={alert} />

        
        <Routes>
          <Route exact path='/'
          element = { <TextForm heading = 'Enter your text below' mode={mode} showAlert = {showAlert}/>
        }/>
          <Route exact path="/about" 
          element = {<About />}
          />

        </Routes>

      <ModeButton mode = {mode} toggleModeParent = {toggleMode}/>
      
      </Router>
    </>
  );
}
export default App;