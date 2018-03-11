import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../HomePage';
import './render.css';
import SignupPage from '../SignupPage';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      screen: 1,
    };
  }
  setScreen=(screen)=>{
    this.setState({
      screen,
    })
  }
  render() {
    if (this.state.screen === 1) {
            return (
        <div className="Main-render">
          <HomePage setScreen={this.setScreen}/>
        {/* </SignUpPage/> */}
        </div>
      );
    }
    return (
      <div className="Main-render">
        <SignupPage setScreen={this.setScreen}/>
      </div>
    );
 
}
 
}

ReactDOM.render(<Main />, document.getElementById('root'));
// ReactDOM.render(
//   (
//     <BrowserRouter>
//       <Main />
//     </BrowserRouter>
//   ), document.getElementById('root'),
// );