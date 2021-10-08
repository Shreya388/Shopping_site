import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Parent component
class Parent extends React.Component{
  render(){
    return(
      <div>
        <h2>You are inside parent component</h2>
        <Child name="cutiepie" userId = "3444" age="10" height="10 inch" />
      </div>
    );
  }
}

//Child component
class Child extends React.Component{
  render(){
    return(
      <div>
        <h2>Hello, {this.props.name}</h2>
        <h2>He is {this.props.age} years old</h2>
        <h3>You are inside Child component</h3>
        <h3>His height is {this.props.height}</h3>
        <h3>Your user id is: {this.props.userId}</h3>
      </div>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Parent />
  </React.StrictMode>,
  document.getElementById('root')
  ,

  console.log("Hello!")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
