import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import DrumKit from './DrumKit';
import Clock from './Clock';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='wrapper'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/project-1' component={DrumKit} />
            <Route exact path='/project-2' component={Clock} />
            <Route render={function () {
              return <p className="content">Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;