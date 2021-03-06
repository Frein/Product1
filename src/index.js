import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Product1App from "./Product1App";
import LocalRouter from "./localRouter";

ReactDOM.render(
    <React.StrictMode>
        <Product1App routing={<LocalRouter/>} masterCount={2}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
