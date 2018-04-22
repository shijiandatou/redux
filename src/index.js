import React from "react";
import ReactDOM from 'react-dom';
import { PropTypes } from "prop-types";
import Counter2 from './components/Counter2';
import Provider from "./components/Provider";
import {createStore} from './redux';
import counter from './reducers/counter'; 

let store =createStore(counter);

ReactDOM.render(
<Provider store={store}>
    <Counter2/>
</Provider>,document.querySelector("#app"));
