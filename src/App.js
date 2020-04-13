import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  let [likes, setLike]= useState('Likes')
  function myCount () {
    setCount(count + 1)
    setLike(likes)
    if (count === 0){
      setLike('Like')
    }
    else if (count === 1){
        setLike('Likes')
    }
  console.log(likes)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={myCount}><button class="myButton">{count} {likes}</button></div>
      </header>
    </div>
  );
}

export default App;
