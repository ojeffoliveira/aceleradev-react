import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/title/';
import Title from "./components/title"
import Text from "./components/text"
import Content from "./components/content"

class App extends React.Component {
  
  state = {
    post: ''
  }

  HandleChange(e){
    
    this.setState({post: e})
  }

  render() {
    return(
    <div>
      <textarea value= {this.state.post} onChange = {(event)=> this.HandleChange(event.target.value)}>
      </textarea>  SS
      <button>Publicar</button>
    </div>
  );
}
}

export default App;
