import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Hello from "./components/Hello"
import store from './store/configureStore.dev.js';

// import registerServiceWorker from './static/js/registerServiceWorker';

// ReactDOM.render(<App data="1221" parents={{age:"123"}}/>, document.getElementById('root'));
ReactDOM.render(<Hello  store={store} />, document.getElementById('root'));

//暂时还不知道干嘛用的
//registerServiceWorker();
