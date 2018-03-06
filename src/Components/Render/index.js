import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Footer from '../Footer';
import HomePage from '../HomePage';
import './Render.css';


class Main extends React.Component {
  render() {
    return (
      <div className="Main-render">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
