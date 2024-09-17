import { useState, useRef, useEffect } from 'react'
import * as math from 'mathjs'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputVal, setInputVal] = useState('');
  const [result, showResult] = useState("");
  const [isAnimate, setIsAnimate] = useState(false);
  const err = "math error"; 

  const anima = window.addEventListener("load", function() {
    setTimeout( () => {
        const open = this.document.querySelectorAll(".hid");
        for (let i = 0; i < open.length; i++) {
            open[i].classList.replace("hid", "rev");
        }
    }, 0o0);
})

  const onButtonClick = (e, val) => {
    e.preventDefault();

    setIsAnimate(true);
    
    if (val === '=') {
      try {
        const solvedResult = math.evaluate(inputVal);
        setInputVal(solvedResult);
      } catch {
        setInputVal(err);
      }
    } else if (val === 'C') {
      setInputVal(inputVal.slice(0, -1));
    } else if (val === 'AC') {
      setInputVal('');
    } else {
      setInputVal(inputVal + val);
    }
  };
  

  const Buttons = [
    'AC', 'C', 
    '1', '2', '3', '+', 
    '4', '5','6', '-',
     '7', '8', '9', '*',
    '.', '0',  '/', '='
    ];

   
  return (
    <> 
    <div className="name hid"> <span className='gb hid'>U</span>Tony Calc </div>
    <form>
      <label> 
        <div className='cont'> 
          <input type="text" value={inputVal} className='item1' disabled readOnly/>

          {Buttons.map((buttons, index) => (
  <button
    key = {buttons}
    className={`
      ${index === 0 ? 'but1 ' : 'butn'}
      ${index === 1 ? 'but2' : 'butn'}
    `}
    onClick={(e) => onButtonClick(e, buttons)}
  >
    {buttons}
  </button>
))}        </div>
      </label>
    </form>    
    </>
  );
}

export default App


