import React, {Component} from 'react';
import './styles/app.css';
import Settings from "./components/Settings";
import Library from "./components/Library";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Settings/>
                <Library/>
            </div>
        );
    }
}

export default App;
