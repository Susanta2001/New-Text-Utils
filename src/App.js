import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import About from './components/About';
import Tools from './components/Tools';
import { useState } from 'react';

function App() {
// this state is for defining the mode
  const [mode, setMode] = useState('Light');

// this state is for defining the alert text
  const [alertText, setAlertText] = useState(null);

  // this function is for the functionality of the theme radio
  const toggleMode = ()=>{
  if(mode === 'Light'){
    setMode('Dark');
    document.body.style.backgroundColor = '#042743';
      setAlertText('Success. Dark Mode is now activated');
  }
  else{
    setMode('Light');
    document.body.style.backgroundColor = 'white';
      setAlertText('Success. Light Mode is now activated');
  }
  setTimeout(() => setAlertText(null), 1500);
  }
// this state is defining the text color
const tColor = mode === 'Dark' ? 'light' : 'dark';


  return (
    <>
    <Navbar themeMode={mode} toggleTheme={toggleMode} textColor={tColor}/>
    <Alert alertMessage={alertText}/>
    {/* <About textColor={tColor}/> */}
    <Tools textColor={tColor} 
    themeMode={mode}/>
    </>
  );
}

export default App;
