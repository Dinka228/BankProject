import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BankStore from "./store/BankStore";
export const Context = createContext(null)
ReactDOM.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            bank:new BankStore(),
        }
    }>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
