var React = require('react');
var reactdom = require('react-dom');
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  // Don't call this.setState() here!
    this.state = {
      round: 0,
      gameState: {}
    };
    
  }

  render() {
    return (
        <table>
          <thead>
            <tr>
              <th colspan="2">The table header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The table body</td>
              <td>with two columns</td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default App;
