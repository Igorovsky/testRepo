import React, { Component } from 'react';
import './App.scss';
import 'whatwg-fetch';

class App extends Component {

  state = {
    fruits : []
  }
  
  componentDidMount() {

      fetch('https://my-json-server.typicode.com/Igorovsky/my-json-mock-server/items')
          .then(response =>  response.json())
          .then(json => this.setState({ fruits : json[0].fruit }));
  }

  // render method for this component
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hey Shop</h1>
        </header>

        <p>Hey Shop has {this.state.fruits.length} different fruits :)</p>

        <div className="row-grid">
          <div className="col-item md-cover-2 lg-cover-4">
            responsive length
          </div>
        </div>

        <div className="row-grid">
          <div className="col-item sm-cover-1">
            xs-1
          </div>
          <div className="col-item sm-cover-2">
            xs-2
          </div>
          <div className="col-item sm-cover-3">
            xs-3
          </div>
          <div className="col-item sm-cover-6">
            
            <div className="row-grid">
              <div className="col-item md-cover-4 lg-cover-6">
                A
              </div>
              <div className="col-item md-cover-8 lg-cover-6">
                B
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
