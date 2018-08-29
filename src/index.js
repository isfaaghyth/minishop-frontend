import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function generateSession(){
  var res = "";
  var str = "abcdefghijklmnopqrstuvwxyz1234567890";
  for(let i = 0; i < 15; i++){
    res += str.charAt(Math.floor(Math.random() * str.length));
  }
  return res;
}

if(sessionStorage.getItem('USERSESSID') === null){
  sessionStorage.setItem('USERSESSID', generateSession());
}

console.log(sessionStorage.getItem('USERSESSID'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
