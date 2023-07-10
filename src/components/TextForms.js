import React, {useState} from 'react'

export default function TextForms(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicled" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () =>{
    // console.log("Uppercase was clicled" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () =>{
    // console.log("Uppercase was clicled" + text);
    let newText = '';
    setText(newText)
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }


  const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) =>{
    // console.log("on change");
    setText(event.target.value);
  }
  const[text,setText] = useState('');
  // setText("Hellooo");
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div class="mb3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleCapitalizeWordClick}>Capitalize Word</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        {/* <button className="btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy Text</button> */}
        <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minuts read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to Preview here"}</p>
    </div>
    </>
  )
}
