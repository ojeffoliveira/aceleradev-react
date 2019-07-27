import React from 'react';
import './App.css';

class App extends React.Component {

  state={
    input: "",
    items:[],
    lastItem:"",
    showWarning: false
  }
  
  handleChange = (event) => {
    this.setState({input: event.target.value, showWarning: false})
  }

  handleClick = (event) => {
    if(this.state.input===""){
      return;
    }
    if(this.state.items.includes(this.state.input)){
      this.setState({showWarning: true});
    }
    else{
    this.setState({items: [this.state.input].concat(this.state.items), lastItem: this.state.input, input: "",showWarning:false });
    }
  }


  componentDidMount(){
    this.setState({items:["Batata","Frango","Tomate","Arroz"]});
  }

  render(){
    let FilteredList;
    if(this.state.input===""){
    FilteredList=this.state.items;

    }
    else{
    FilteredList = this.state.items.filter((ele) => {
                          return ele.includes(this.state.input);
                        });
    }               
  return (
    <div style={{"padding" : "10px"}}>
      <Navbar text={this.state.input} 
      mudanca={this.handleChange} 
      clique={this.handleClick} 
      warning={this.state.showWarning}/>

      <div>
        <Lista items={FilteredList} lastItem={this.state.lastItem}/>

      </div>

    </div>
  );
  }
}

class Navbar extends React.Component {

render () {
  let warning;
  if(this.props.warning){
      warning = <p style={{"fontSize":"10px", "color":"red"}}>
      Item já está na lista.</p>;
  }
  
  return(
      <div style={{ "paddingBottom":"6px"}}>
        <div>
          <input style={{"width":"300px", "height":"50px"}} value={this.props.text} onChange={(event) => this.props.mudanca(event)}></input>
          <button onClick={(event)=> this.props.clique(event)}>+</button>
        </div>
        {
          warning
        }
      </div>
  );

}

}


function Lista(props){

  if(props.items.length===0){
    return ( <div style={{"paddingLeft":"10px"}}>
                <p>Nenhum item</p>
              </div>);
  }
  else{
    return(
      <div style={{"paddingLeft":"10px",}}>
        {
          props.items.map((ele,index)=>{
            if(ele===props.lastItem){
              return (
                  <Item titulo={ele} color={"blue"}/>
               );
            }

            return(
              
                  <Item titulo={ele} color={"black"}/>
                );
            },this)
        }


      </div>
    );
  }


}

function Item(props){
  return (<div style={{"color": `${props.color}`,"marginBottom":"5px"}}>
          <span style={{"textAlign":"center","display":"inline",
                         "backgroundColor":"yellow",
                          "paddingLeft":"5px",
                          "paddingRight":"5px",
                          "borderRadius":"5px",
                          "marginBottom":"6px"}}>
    {props.titulo}   
    </span>
    </div>

  );


}
export default App;
