import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Todos } from './modules';
import './dist/main.css';

ReactDOM.render(<Provider store={store}>
    <Todos />
</Provider>, document.getElementById('root'));
