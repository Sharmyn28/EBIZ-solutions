import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'redux-zero/react'
import store from './store/store';
import Home from "./components/Home";
import Professor from "./components/Professor/ProfessorView";
import LogIn from "./components/LogIn/LogIn";
import registerServiceWorker from './registerServiceWorker';
import FileData from "./components/FileData";
import Sanciones from "./components/sanciones";



const Index = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/professor' component={Professor} />
                <Route path='/login' component={LogIn} />
                <Route path='/fileData' component={FileData} />
                <Route path='/sanciones' component={Sanciones} />
            </Switch>
        </HashRouter>
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
