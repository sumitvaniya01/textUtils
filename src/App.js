// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
    }
    
  }
  return (
    <>
    {/* <nav>
    <li>home</li>
    <li>about</li>
    <li>address</li>
    </nav>
    <div className=="container">
      <h1>Hello {name}</h1>
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum, suscipit ea eaque consequatur accusantium culpa labore, obcaecati, itaque quod illo aspernatur voluptatum molestias iste distinctio. Nulla, rerum. Officia quasi hic error nihil vel. </p>
    </div> */}
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my=3">
    <TextForms heading ="Enter the text to analyze below " mode={mode}/>
    </div>
   


    </>
    // <div className=="blank">Hiii</div>
  );
}

export default App;
