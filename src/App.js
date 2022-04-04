import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      name: {firstName: 'Kevin', lastName: 'Stapleton'},
      company: 'KSD'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hello I'm {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p>
          <button onClick={()=>{
            (this.setState(
              () => {
                return {
                  name: {firstName: 'Molly', lastName: 'Stapleton'}
                }
              }, 
              ()=>{
                console.log(this.state);
              }
            ))
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
