import {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
const PasswordGen = () => {
const [output,setOutput ] = useState("");
    
    var lengthVar = 0;
    let checkUpper =false
    let checkLower =false
    let checkNumber = false
    let checkSymbol =false



  const passwordGenerate = () => {
  
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%&*";
    let finalChar ="";
    let length = lengthVar;
    let password = "";

    if (checkUpper === true){
        finalChar=finalChar+upperCaseChar
    }
    if (checkLower === true){
        finalChar=finalChar+lowerCaseChar
    }
    if (checkNumber === true){
        finalChar=finalChar+numbers
    }
    if (checkSymbol === true){
        finalChar=finalChar+symbols
    }

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random()*finalChar.length+1)
       
        
        password = password+finalChar.charAt(index)
    }
  
    setOutput(password);
  };
  
 
  return (
    <div className="parent">
      <h1 className="passh1">Password Generator</h1>

         <div className="input-div">
            <input type="text" disabled value={output} className="input" />
         <div className="image-part">
             <CopyToClipboard text={output}>
                <img src="https://www.bing.com/th?id=OIP.VvvAtVfJiiUduBcdxWcWcAHaHa&pid=3.1&cb=&w=300&h=300&p=0" className="image" alt="copy"/>
             </CopyToClipboard>
      
      </div>
      </div>

      <br />
      <div className="selecting">
     <span>Select Password Length</span>

     
      <select className="options" onChange={(e)=>{lengthVar=e.target.value}}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      

      </div>
      <br />

      <div className="checking">
        <div >
      <input onClick={()=>{checkUpper=!checkUpper}} type="checkbox" id="UpperCase" />
      <label htmlFor="UpperCase">Upper Case</label>
      </div>

      <br />
      <div>
      <input onClick={()=>{checkLower=!checkLower}} type="checkbox" id="LowerCase" />
      <label htmlFor="LowerCase">Lower Case</label>
      </div>
      <br />
      <div>
      <input onClick={()=>{checkNumber=!checkNumber}} type="checkbox" id="IncludeNumbers" />
      <label htmlFor="IncludeNumbers">Include Numbers</label>
      </div>
      <br />
      <div>
      <input onClick={()=>{checkSymbol=!checkSymbol}} type="checkbox" id="IncludeSymbols" />
      <label htmlFor="IncludeSymbols">Include Symbols</label>
      </div>
      <br />
      </div>

      <button onClick={passwordGenerate} className="generate-btn">Generate Password</button>
    </div>
  );
};
export default PasswordGen;