import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import Nav from './components/Nav';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

export default App;