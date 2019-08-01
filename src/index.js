//impor t the react libreries
import React from 'react';
import ReactDOM from 'react-dom';

//create a rect component
const App = () => {
const buttonText = { text:'Click me!'};
const labelText = 'Enter name: '
return (
<div>
  <label className="label" htmlFor="name">
    {labelText}
  </label>
  <input id = "name" type = "text"></input>
  <button style={{backgroundColor: 'blue', color:'white'}} >
    {buttonText.text}
  </button>
</div>
);
};

//take the react component and show it on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')  
);