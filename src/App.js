import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return <main>

    <header> 
      <img className="logo"
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Pac_Man.svg/1200px-Pac_Man.svg.png"
      />
      Chatbox
    </header>

    <TextInput onSend={t=> console.log(t)}/>

  </main>

  function TextInput(props){
    const [text,setText] = useState('')
    
    return <div className="text-input">
    <input className="text"
      value={text}
      placeholder="sup, hoe?"
      onChange={e => setText(e.target.value)}
    />
    
    <button className="button"
      onClick={()=> {
      props.onSend(text)
      setText('')}}>
      SEND
    </button>

    </div>
  }
}


export default App;
