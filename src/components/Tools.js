import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Tools(props) {

    // this state will accept text from text-area
    const [text, setText] = useState('');

    // this function is for setting background for text area
    const textAreaStyle = {
        backgroundColor: props.themeMode === 'Dark' ? 'transparent' : 'white'
    };

    // this function is to make text area accept changes
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // these functions are for each buttons

    // handling Upper Case
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    // handling Lower Case
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    // handling Title Case 
    const handleTitleCase = () => {
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(newText);
    }

    // handling Copy All Text
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
    }

    // handling Clear Text
    const handleClearText = () => {
        let newText = '';
        setText(newText);
    }
    return (
        <>
            <div className="container mb-3 my-5">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1 className={`text-${props.textColor}`}>Try Text Utils - word counter, character counter, remove extra spaces</h1></label>
                <textarea className="form-control text-light" id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleOnChange} style={textAreaStyle}></textarea>
            </div>
            <div className="container">
                <button type="button" className="btn btn-primary my-1 me-2" onClick={handleUpperCase}>Convert to upper case</button>
                <button type="button" className="btn btn-primary my-1 me-2" onClick={handleLowerCase}>Convert to lower case</button>
                <button type="button" className="btn btn-primary my-1 me-2" onClick={handleTitleCase}>Covert to title case</button>
                <button type="button" className="btn btn-primary my-1 me-2" onClick={handleCopyText}>Copy all text</button>
                <button type="button" className="btn btn-primary my-1 me-2" onClick={handleClearText}>Clear the text area</button>
            </div>
            <div className={`container my-4 text-${props.textColor}`}>
                <h3>Your Text Summary</h3>
                <p>{text.trim().split(/\s+/).filter(word => word !== '').length} words, {text.length} characters</p>
                <p>{(0.008 * text.split(/\s+/).filter(word => word !== '').length).toFixed(2)} minutes to read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Type something above to preview it here"}</p>
            </div>
        </>
    )
}

Tools.propTypes = {
    textColor: PropTypes.string,
    themeMode: PropTypes.string,
};

export default Tools