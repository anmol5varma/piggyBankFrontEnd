import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../HomePage';
import './render.css';
import SignupPage from '../SignupPage';
import Transfer from '../Transfer';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      screen: 1,
      isToken:false,
    };
  }
  setScreen=(screen)=>{
    this.setState({
      screen,
    })
  }
  componentDidMount(){
    localStorage.clear();
    const token = JSON.parse(localStorage.getItem('token'))
   // console.log("Hello",token.token);
    if(token){
      this.setState({
        isToken:true,
      })
    }
  }
  render() {
    if(this.state.isToken===true){
      return(
        <div>
        <Transfer/>
        </div>
      )
    }
      if (this.state.screen === 1) {
        return (
    <div className="Main-render">
      <HomePage setScreen={this.setScreen}/>
    </div>
  );return (
    <div className="Main-render">
      <SignupPage setScreen={this.setScreen}/>
    </div>
  );
      }
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