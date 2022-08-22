import React, {useState} from 'react';

export default function TextBox(props) {

    const[text, setText] = useState("");

    const changeUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const changeLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const clearTextHandler = () => {
        setText("");
        props.displayAlert("Text Cleared !", "success");

    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.displayAlert("Copied to Clipboard", 'success');

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    } 

  return (
      <>
    <div className='container' style = {{color: props.mode==='dark'?'white': '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" style = {{backgroundColor: props.mode==='dark'?'#383a60': 'white',
                                                         color: props.mode === 'dark'?'white': '#042743'}} value={text}  onChange={handleOnChange} rows="7"></textarea>  
            <button type="button" disabled={text.length === 0} className="btn btn-primary my-2" onClick={changeUpperCase}>UpperCase</button>
            <button type="button" disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={changeLowerCase}>LowerCase</button>
            <button type="button" disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={clearTextHandler}>Clear All</button>
            <button type="button" disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
            <button type="button" disabled={text.length === 0} className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
    </div>

    <div className="container" style = {{color: props.mode==='dark'?'white': 'black'}}>
        <h2>Word counter</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
