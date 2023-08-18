import React, { useState } from "react";

export default function TextForms(props) {
  

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);

    // For showing alert msg
    props.showAlert("converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);

    // For showing alert msg
    props.showAlert("converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);

    // For showing alert msg
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }

   // Copy Text Button Function
   const handleCopy = () => {
    // console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    // text.ariaSelected();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);

    // For showing alert msg
    props.showAlert("Copied to Clipboard!", "success");
  }

  //Remove Extra spaces Function
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))

    // For showing alert msg
    props.showAlert("Extra spaces removed!", "success");
  }
  

  const [text, setText] = useState("");

  // text = "new text"; //wrong way to change the state
  // setText("new text"); //correct way to change the state

  return (
    <>
     {/* we are using Ternary Operator for styling in this we are using javascript object {{ }} Yellow brackets are objects in Java Script. */}

      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}

            //change the color of Textarea and fonts
            style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>

        {/* for counting words and characters */}
        <p>
        {text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>

        {/* For Displaying in Text in Preview. */}
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
