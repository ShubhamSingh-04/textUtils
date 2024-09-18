import {useState} from 'react';
import './App.css';
import ModeButton from './components/ModeButton';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const toggleMode = () =>{
    if(mode === 'light')
        setMode('dark')
    else
      setMode('light')
  };

  const [mode, setMode]  = useState('light');

  return (
    <>
      <Navbar  title='TextUtils2'/>

      <div className="container">
      <TextForm heading = 'Enter your text below' mode={mode}/>
      </div>

      <ModeButton mode = {mode} toggleModeParent = {toggleMode}/>
    </>
  );
}
export default App;