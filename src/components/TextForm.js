import React, { useEffect, useState } from 'react'
import '../App.css';

export default function TextForm(props) {
  const handelUpClick = () => {
;
    setNewText(text.toUpperCase());
  }

  const handelLowClick = () => {
    setNewText(text.toLowerCase());
  }

  const handelOnChange = (event) => {
    const newText = event.target.value; // Store the new text value

    if (newText.trim() === "") {
      setNewText("");
      setWordCount(0);
      setCharCount(0);
    } else {
      setWordCount(newText.trim().split(/\s+/).length);
      // const words = newText.trim().split(/[ ]+/).length
      const chars = newText.length;

      // setWordCount(words);
      setCharCount(chars);
    }

    setText(newText);
  };

  const handelCopy = () => {
    props.showAlert();

    // let text = document.querySelector('#myBox-2').value;
    document.querySelector('#myBox-2').select();
    navigator.clipboard.writeText(text)
      .then(() => {
        // alert("Text copied to clipboard");
      })

      .catch(() => {
        alert("ERROR copying")
      });

  }

  const removeExtraSpaces = () => {
    let text = document.querySelector('#myBox').value;
    const newT = text.split(/[ ]+/);
    setNewText(newT.join(" "));
  }

  const btnDark = {
    backgroundColor: 'black',
    color: 'white'
  };

  const btnLight = {
    backgroundColor: 'white',
    color: 'black'
  };

  const [text, setText] = useState('');
  const [newText, setNewText] = useState("");

  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(text.length);

  const [btnStyle, setBtnStyle] = useState(btnDark);
  useEffect(() => {
    // if (props.mode === 'light')
    //   setBtnStyle(btnLight);
    setBtnStyle(btnDark);
  }, [props.mode]);

  return (
    <>
      <div>
        <form className="Form">
          <label htmlFor="floatingInputInvalid"><h1>{props.heading}</h1></label>
          <textarea className='form-control' id="myBox-1" rows='8' value={text} placeholder='Enter Text Here' onChange={handelOnChange}></textarea>
        </form>

        <button disabled = {text.length === 0} className="btn-primary btn mx-2 mb-4" onClick={handelUpClick} style={btnStyle}>
          Convert to Upper Case
        </button>

        <button disabled = {text.length === 0} className="btn-primary btn mx-2 mb-4" onClick={handelLowClick} style={btnStyle}>
          Convert to Lower Case
        </button>

        <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-2 mb-4" onClick={handelCopy} style={btnStyle} >Copy Text</button>

        <button disabled = {text.length === 0} type="button" className="btn btn-primary mx-2 mb-4" onClick={removeExtraSpaces} style={btnStyle}>
          Remove Extra Spaces</button>

        {/* <button type="reset" className="btn btn-primary mx-2" style={btnStyle}>
          Reset</button> */}

        <textarea className='form-control my-3' id="myBox-2" rows='8' value={newText} placeholder='Converted Text Will Appear Here'></textarea>
      </div>

      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p><b>{wordCount} words and {charCount} characters.
          Time taken to read: {(0.008 * wordCount).toFixed(2)} mins
        </b>
        </p>
      </div>
    </>
  )
}
