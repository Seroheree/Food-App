import './App.css';
import {DataBase} from './Components/PseudoDB'
import Main from './Components/Main/Main'
import {useState} from 'react'
import Nav from './Components/Main/Nav/Nav'



function App() {

  
  return (

    
    <div className="App">
      <Main dataBase={DataBase} />

    </div>
  )
}

export default App;
