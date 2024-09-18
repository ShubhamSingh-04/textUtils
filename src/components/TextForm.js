import React, { useEffect, useState } from 'react'

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("Upper Case was clicked");
    setNewText(text.toUpperCase());
  }

  const handelLowClick = () => {
    // console.log("Lower Case was clicked");
    setNewText(text.toLowerCase());
  }

  const handelOnChange = (event) => {
    const newText = event.target.value; // Store the new text value

    if (newText === "") {
      setNewText("");
      setWordCount(0);
      setCharCount(0);
    } else {
      // Calculate word and character counts based on the new text
      const words = newText.trim().split(/\s+/).length;
      const chars = newText.length;

      setWordCount(words);
      setCharCount(chars);
      setNewText(""); // Optionally clear newText if you only want to display converted text
    }

    setText(newText);
  };

  const handelCopy = () => {
    props.showAlert();

    let text = document.querySelector('#myBox').value;
    document.querySelector('#myBox').select();
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

  const [text, setText] = useState('Enter text Here');
  const [newText, setNewText] = useState("The Converted Text Will Appear Here");

  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(text.length);

  const [btnStyle, setBtnStyle] = useState(btnDark);
  useEffect(()=>{
    if(props.mode === 'light')
      setBtnStyle(btnLight);
    else setBtnStyle(btnDark);
  }, [props.mode]);
  
  return (
    <>
      <div>
        <form className="Form">
          <label htmlFor="floatingInputInvalid"><h1>{props.heading}</h1></label>
          <textarea className='form-control' id="myBox" rows='8' value={text} onChange={handelOnChange}></textarea>
        </form>

        <button className="btn-primary btn mx-2" onClick={handelUpClick} style={btnStyle}>
          Convert to Upper Case
        </button>

        <button className="btn-primary btn mx-2" onClick={handelLowClick} style={btnStyle}>
          Convert to Lower Case
        </button>

        <button type="button" className="btn btn-primary mx-2" onClick={handelCopy} style={btnStyle} >Copy Text</button>

        <button type="button" className="btn btn-primary mx-2" onClick={removeExtraSpaces} style={btnStyle}>
          Remove Extra Spaces</button>

        <button type="reset" className="btn btn-primary mx-2" style={btnStyle}>
          Reset</button>

        <textarea className='form-control my-3' id="myBox" rows='8' value={newText}></textarea>
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
