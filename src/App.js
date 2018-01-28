import React, {Component} from 'react';
import './styles/app.css';
import Settings from "./containers/SettingsContainer";
import Library from "./containers/LibraryContainer";

class App extends Component {
    render() {
        return (
            <div className="app-lib">
                <Settings/>
                <Library/>
            </div>
        );
    }
}

export default App;
