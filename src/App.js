import './App.css';
import Header from './components/Header/Header';
import Sale from './components/Main/Sale';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './components/Main/Home';

function App() {
  return (
    <Router>
    <div className="App">
     <Route exact path="/">
     <Home/>
     </Route>
     <Route path="/salespage">
     <Sale/>
     </Route>
    </div>
    </Router>
  );
}

export default App;
