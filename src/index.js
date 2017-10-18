import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Game from './components/Game/Game.js';

import './index.css';

ReactDOM.render((
        <Router>
            <div>
                <Route exact path="/" render={() => <h1><Link to="/game">Go play the game</Link></h1>} />
                <Route path="/game" component={Game} />
            </div>
        </Router>

    ), document.getElementById('root')
);
