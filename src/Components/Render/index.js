import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../HomePage';
import './render.css';


class Main extends React.Component {
  render() {
    return (
      <div className="Main-render">
        <HomePage />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
