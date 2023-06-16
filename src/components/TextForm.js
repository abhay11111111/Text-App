import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("It is clicked - HandleUpHere Boss")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase","success")
    }
    const handleLowClick = () =>{
        console.log("It is clicked - HandleLowHere Boss")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase","success")
    }
    const handleOnChange = (event) =>{
        console.log("It is clicked - onChangeHere Boss")
        setText(event.target.value)
    }
    const handleLClClick =()=>{
        setText('')
        props.showAlert("Text Cleared","success")
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    

    const [text, setText] = useState('Enter your copied content here!');
  return (
    <>
    <div className='container' style = {{color : props.mode === 'dark'?'white':'black'}}>
        <h1>Welcome!</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button type="button" className="btn btn-outline-primary" onClick={handleUpClick}>Convert to UpperCase</button>
<button type="button" className="btn btn-outline-success  mx-4" onClick={handleLowClick} >Convert to LowerCase</button>
<button type="button" className="btn btn-outline-warning" onClick={handleLClClick} >Clear Text</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-4">
    <h2>Your Text Summary Here</h2>
    <p>{text.split(" ").length} Words  {text.length} Characters</p>
    <p>It will take {(text.length)*0.008} minutes to read! </p>
    </div>
    </>
  )
}
