import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import InviteContainer from './scr/containers/invite_container';
import store from './scr/store/store';
import "./stylesheets/main.css"


const main = (
  <Provider store={store}>
    <InviteContainer />
  </Provider>
)

ReactDOM.render(main, document.getElementById('container'));
