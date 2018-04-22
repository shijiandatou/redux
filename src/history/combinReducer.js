import React from "react";
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Todo from './components/Todo';

ReactDOM.render(<div>
    <Todo />
    <Counter />
    </div>,document.querySelector("#app"));
