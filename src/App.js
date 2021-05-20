
import './App.css';

import Toolbar from "./components/Toolbar";
import Upload from "./components/Upload";
import Inventory from "./components/Inventory";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Toolbar/>
                <Switch>
                    <Route path='/upload'>
                        <Upload/>
                    </Route>
                    <Route path='/storage'>
                        <Inventory/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;