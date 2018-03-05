import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Footer from '../Footer';
import Signup from '../Signup';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Signup />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
