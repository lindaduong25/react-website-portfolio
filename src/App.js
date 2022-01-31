import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './pages/components/NavBar';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{backgroundColor: 'black'}}>
        <NavBar />
        <Switch>
          <Route path="/react-website" exact component={About}/>
          <Route path="/about" component={About}/>
          <Route path="/experiences" component={Experiences}/>
          <Route path="/education" component={Education}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
