import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css'; */
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context';
import {RoomProvider1} from './context1';
import {RoomProvider2} from './context2';

ReactDOM.render(
  <RoomProvider>
  <RoomProvider1>
   <RoomProvider2>
<Router>
    <App />
  </Router>
  </RoomProvider2>
  </RoomProvider1>
  </RoomProvider>
 
  
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
