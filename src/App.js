import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import 'sparkle.css/dist/css/sparkle.min.css';
import './App.css';

class App extends Component {
    render() {
        return(
            <div className="wrapper">
                <div className="App">
                    <h1>Hello, World!</h1>

                    <div className="tags">
                        <span className="tag tag--primary">New!</span>
                        <span className="tag tag--dark">v1.0.0</span>
                    </div>

                    <p>
                        This basic application presents the barebones of a React app, and uses
                        &nbsp;<span className="tag">Sparkle.CSS</span> as its base styling.
                    </p>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);