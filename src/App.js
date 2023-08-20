import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Dictionary from "./Dictionary";
import FourOhFour from "./FourOhFour";
import NoSound from "./NoSound";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Dictionary}/>
          <Route path="/FourOhFour" Component={FourOhFour}/>
          <Route path="/NoSound" Component={NoSound}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
