import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/title/';
import Title from "./components/title"
import Text from "./components/text"
import Content from "./components/content"

class App extends React.Component {
  
  state = {
    array: [0,1,2]
  }
  handleClickButton(){
    this.setState({array: [...this.state.array,this.state.array.length]});

  }

  render() {
    return(
    <div>
      <div>
        <button onClick={()=> this.handleClickButton() }>Meu botao</button>
      </div>

      <div>
      {this.state.array.map(function(ele,index){const texto = `Número de cliques ${ele}`; return (<div><Text text={texto}></Text></div>)})}
      
      </div>
      <Title></Title>
      <Content></Content>  
    </div>
  );
}
}

export default App;
