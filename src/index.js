import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


let store = createStore(manageTodo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*
Just below the import statements, you can see that we create the store using 
createStore, provided by redux. Then, further down, we pass the store 
into the Provider. This will allow us access when we connect our components.
*/
