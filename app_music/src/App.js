import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchFormul from './components/SearchFormul';
import { Container } from 'react-bootstrap';
import ResultContainer from './components/ResultContainer';





class App extends Component {
  render(){
    return (
      <Container className="App">
      <div className="App">
        <SearchFormul/>
      </div>
      <div classname="App">
        <ResultContainer/>
        
        <span className="sr-only">Loading...</span>
      </div>
      </Container>
    );
  }
}



export default App;
