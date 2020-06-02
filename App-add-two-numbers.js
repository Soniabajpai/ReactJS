import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {num1: '' , num2: '' , total: ''}
    this.totalsum = this.totalsum.bind(this)
  }

  totalsum(){
    //this.setState = {total: parseInt(this.state.num1) + parseInt(this.state.num2)};
    //console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2)
    this.setState({ total: parseInt(this.state.num1) + parseInt(this.state.num2) })
    //console.log(this.state)
  }

  render(){
    return(
 
<div className="">
<h3>Add Two Numbers</h3>
<input type="text" value={this.state.num1} onChange={ (eve) => { this.setState({ num1: eve.target.value }) } } />
<br/>
+
<br/>
<input type="text" value={this.state.num2} onChange={ (eve) => { this.setState({ num2: eve.target.value })} } />
<button className="button" onClick={this.totalsum}>ADD</button>
<h3>Total : <input type="text" value={this.state.total} /></h3>

</div>

      )
  }
}

export default App;
