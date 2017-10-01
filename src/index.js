import React from 'react';
import {render } from 'react-dom';
//Router
import {BrowserRouter, Match, Miss}from 'react-router';
//Components
import App from './components/App';
import Connexion from './components/connexion';
import NotFound from './components/NotFound';
//CSS
import './index.css';

const Root = () => {

    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Connexion}/>
                <Match exactly pattern="/pseudo/:pseudo" component={App}/>
                <Miss  component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.getElementById('root'));