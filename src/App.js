import {useState} from 'react';
import './App.css';
import ModeButton from './components/ModeButton';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const toggleMode = () =>{
    if(mode === 'light')
        setMode('dark')
    else
      setMode('light')
  };

  const [mode, setMode]  = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = ()=>{
    setAlert(true);

    setTimeout(()=>{
      setAlert(false);
    }, 2000);
  };

  return (
    <>
      <Navbar  title='TextUtils2'/>
      <Alert alert = {alert}/>

      <div className="container">
      <TextForm heading = 'Enter your text below' mode={mode} showAlert = {showAlert}/>
      </div>

      <ModeButton mode = {mode} toggleModeParent = {toggleMode}/>
    </>
  );
}
export default App;