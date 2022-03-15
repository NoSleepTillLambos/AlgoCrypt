import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Comparison from './Components/Comparison';
import Timeline from './Components/Timeline';


// setting up routing
function App() {
  return (

    <Router>
      <div className="App">
        <NavBar/>
        
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/Comparison">
              <Comparison/>
            </Route>
            <Route path="/Timeline">
              <Timeline/>
            </Route>
          </Switch>
        </div>
      
      </div> 
    </Router>
    
    
    
  );
}

export default App;
