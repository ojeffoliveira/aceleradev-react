import React from 'react';
import logo from './logo.svg';
import './App.css';

function Title(){
  return (
    <h1 ><Text text="Meu titulo"/></h1>
  );
}

function Content(){
  return (
    <div>
      <Text text="Meu texto"/>
    </div>

  );
}

function Text(props){
  return (
    <span className="text">{props.text}</span>
  )

}

function App() {
  return (
    <div>
      <Title></Title>
      <Content></Content>  
    </div>
  );
}

export default App;
