import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, settext] = useState('');

    const upClick = () => {
        let newText = text.toUpperCase();
        settext(newText)
        props.showAlert("Converted To UpperCase", "success")
    }

    const loClick = () => {
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("Converted To LowerCase", "success")
    }

    const clearClick = () => {
        let clearText = "";
        settext(clearText)
        props.showAlert("Text Cleard", "success")
    }
    const copyClick = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To ClipBoard", "success")
    }
    const extraSpace = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "))
        props.showAlert("Extra Space Removed", "success")
    }

    const handleOnChange = (event) => {
        settext(event.target.value);
    }

    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className="my-2" >{props.title}</h1>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#9b9b9b' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={upClick}>Convert To UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-3 mx-3" onClick={loClick}>Convert To LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-3 mx-3" onClick={clearClick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-3 mx-3" onClick={copyClick}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-3 mx-3" onClick={extraSpace}>Remove Extra Space</button>
                </div>

                <div className="container">
                    <h1>Your Text Summary</h1>
                    <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} Words And {text.length} Characters</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter Somthing In The Above TextBox"}</p>
                </div>

            </div>
        </>
    )
}