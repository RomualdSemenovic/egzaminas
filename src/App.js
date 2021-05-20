import './App.css';
import {useState as state} from 'react';
import Upload from "./components/Upload";
import Toolbar from "./components/Toolbar";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    const [user, setUser] =state([])
  return (
      <Router>
          <div className="App">

                      <Upload set={setUser}/>

          </div>
      </Router>
  );
}


export default App;
