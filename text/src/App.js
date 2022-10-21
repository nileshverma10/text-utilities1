import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Is Enabled", "success");
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Is Enabled", "success");
    }
  }



  return (
    <>
      <div className="App">
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <TextForm showAlert={showAlert} title="Enter the text to analyze" mode={mode} />
        </div>
      </div>
    </>
  );
}

export default App;
