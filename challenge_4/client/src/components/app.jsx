var React = require('react');
var reactdom = require('react-dom');
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  // Don't call this.setState() here!
    this.state = {
      round: 0,
      gameState: {
        hi_00:0, hi_01:0, hi_02:0, hi_03:0, hi_04:0, hi_05:0, hi_06:0,
        hi_10:0, hi_11:0, hi_12:0, hi_13:0, hi_14:0, hi_15:0, hi_16:0,
        hi_20:0, hi_21:0, hi_22:0, hi_23:0, hi_24:0, hi_25:0, hi_26:0,
        hi_30:0, hi_31:0, hi_32:0, hi_33:0, hi_34:0, hi_35:0, hi_36:0,
        hi_40:0, hi_41:0, hi_42:0, hi_43:0, hi_44:0, hi_45:0, hi_46:0,
        hi_50:0, hi_51:0, hi_52:0, hi_53:0, hi_54:0, hi_55:0, hi_56:0,
        hi_60:0, hi_61:0, hi_62:0, hi_63:0, hi_64:0, hi_65:0, hi_66:1,
      }
    };
  }

  actState(target){
    var data = this.state.gameState;
    console.log(data);
    console.log(target);
    data[target] = 1;
    console.log(data);
    this.setState({gameState:data});
  }

  render() {
    return (
        <table>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className={this.state.gameState['hi_00'] === 1 ? 'colored': 'non-colored'} id='00' onClick = {() => {this.actState(document.getElementById('00').innerHTML)}}>hi_00</td>
              <td className={this.state.gameState['hi_01'] === 1 ? 'colored': 'non-colored'} id='01' onClick = {() => {this.actState(document.getElementById('01').innerHTML)}}>hi_01</td>
              <td className={this.state.gameState['hi_02'] === 1 ? 'colored': 'non-colored'} id='02' onClick = {() => {this.actState(document.getElementById('02').innerHTML)}}>hi_02</td>
              <td className={this.state.gameState['hi_03'] === 1 ? 'colored': 'non-colored'} id='03' onClick = {() => {this.actState(document.getElementById('03').innerHTML)}}>hi_03</td>
              <td className={this.state.gameState['hi_04'] === 1 ? 'colored': 'non-colored'} id='04' onClick = {() => {this.actState(document.getElementById('04').innerHTML)}}>hi_04</td>
              <td className={this.state.gameState['hi_05'] === 1 ? 'colored': 'non-colored'} id='05' onClick = {() => {this.actState(document.getElementById('05').innerHTML)}}>hi_05</td>
              <td className={this.state.gameState['hi_06'] === 1 ? 'colored': 'non-colored'} id='06' onClick = {() => {this.actState(document.getElementById('06').innerHTML)}}>hi_06</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_10'] === 1 ? 'colored': 'non-colored'} id='10' onClick = {() => {this.actState(document.getElementById('10').innerHTML)}}>hi_10</td>
              <td className={this.state.gameState['hi_11'] === 1 ? 'colored': 'non-colored'} id='11' onClick = {() => {this.actState(document.getElementById('11').innerHTML)}}>hi_11</td>
              <td className={this.state.gameState['hi_12'] === 1 ? 'colored': 'non-colored'} id='12' onClick = {() => {this.actState(document.getElementById('12').innerHTML)}}>hi_12</td>
              <td className={this.state.gameState['hi_13'] === 1 ? 'colored': 'non-colored'} id='13' onClick = {() => {this.actState(document.getElementById('13').innerHTML)}}>hi_13</td>
              <td className={this.state.gameState['hi_14'] === 1 ? 'colored': 'non-colored'} id='14' onClick = {() => {this.actState(document.getElementById('14').innerHTML)}}>hi_14</td>
              <td className={this.state.gameState['hi_15'] === 1 ? 'colored': 'non-colored'} id='15' onClick = {() => {this.actState(document.getElementById('15').innerHTML)}}>hi_15</td>
              <td className={this.state.gameState['hi_16'] === 1 ? 'colored': 'non-colored'} id='16' onClick = {() => {this.actState(document.getElementById('16').innerHTML)}}>hi_16</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_20'] === 1 ? 'colored': 'non-colored'} id='20' onClick = {() => {this.actState(document.getElementById('20').innerHTML)}}>hi_20</td>
              <td className={this.state.gameState['hi_21'] === 1 ? 'colored': 'non-colored'} id='21' onClick = {() => {this.actState(document.getElementById('21').innerHTML)}}>hi_21</td>
              <td className={this.state.gameState['hi_22'] === 1 ? 'colored': 'non-colored'} id='22' onClick = {() => {this.actState(document.getElementById('22').innerHTML)}}>hi_22</td>
              <td className={this.state.gameState['hi_23'] === 1 ? 'colored': 'non-colored'} id='23' onClick = {() => {this.actState(document.getElementById('23').innerHTML)}}>hi_23</td>
              <td className={this.state.gameState['hi_24'] === 1 ? 'colored': 'non-colored'} id='24' onClick = {() => {this.actState(document.getElementById('24').innerHTML)}}>hi_24</td>
              <td className={this.state.gameState['hi_25'] === 1 ? 'colored': 'non-colored'} id='25' onClick = {() => {this.actState(document.getElementById('25').innerHTML)}}>hi_25</td>
              <td className={this.state.gameState['hi_26'] === 1 ? 'colored': 'non-colored'} id='26' onClick = {() => {this.actState(document.getElementById('26').innerHTML)}}>hi_26</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_30'] === 1 ? 'colored': 'non-colored'} id='30' onClick = {() => {this.actState(document.getElementById('30').innerHTML)}}>hi_30</td>
              <td className={this.state.gameState['hi_31'] === 1 ? 'colored': 'non-colored'} id='31' onClick = {() => {this.actState(document.getElementById('31').innerHTML)}}>hi_31</td>
              <td className={this.state.gameState['hi_32'] === 1 ? 'colored': 'non-colored'} id='32' onClick = {() => {this.actState(document.getElementById('32').innerHTML)}}>hi_32</td>
              <td className={this.state.gameState['hi_33'] === 1 ? 'colored': 'non-colored'} id='33' onClick = {() => {this.actState(document.getElementById('33').innerHTML)}}>hi_33</td>
              <td className={this.state.gameState['hi_34'] === 1 ? 'colored': 'non-colored'} id='34' onClick = {() => {this.actState(document.getElementById('34').innerHTML)}}>hi_34</td>
              <td className={this.state.gameState['hi_35'] === 1 ? 'colored': 'non-colored'} id='35' onClick = {() => {this.actState(document.getElementById('35').innerHTML)}}>hi_35</td>
              <td className={this.state.gameState['hi_36'] === 1 ? 'colored': 'non-colored'} id='36' onClick = {() => {this.actState(document.getElementById('36').innerHTML)}}>hi_36</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_40'] === 1 ? 'colored': 'non-colored'} id='40' onClick = {() => {this.actState(document.getElementById('40').innerHTML)}}>hi_40</td>
              <td className={this.state.gameState['hi_41'] === 1 ? 'colored': 'non-colored'} id='41' onClick = {() => {this.actState(document.getElementById('41').innerHTML)}}>hi_41</td>
              <td className={this.state.gameState['hi_42'] === 1 ? 'colored': 'non-colored'} id='42' onClick = {() => {this.actState(document.getElementById('42').innerHTML)}}>hi_42</td>
              <td className={this.state.gameState['hi_43'] === 1 ? 'colored': 'non-colored'} id='43' onClick = {() => {this.actState(document.getElementById('43').innerHTML)}}>hi_43</td>
              <td className={this.state.gameState['hi_44'] === 1 ? 'colored': 'non-colored'} id='44' onClick = {() => {this.actState(document.getElementById('44').innerHTML)}}>hi_44</td>
              <td className={this.state.gameState['hi_45'] === 1 ? 'colored': 'non-colored'} id='45' onClick = {() => {this.actState(document.getElementById('45').innerHTML)}}>hi_45</td>
              <td className={this.state.gameState['hi_46'] === 1 ? 'colored': 'non-colored'} id='46' onClick = {() => {this.actState(document.getElementById('46').innerHTML)}}>hi_46</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_50'] === 1 ? 'colored': 'non-colored'} id='50' onClick = {() => {this.actState(document.getElementById('50').innerHTML)}}>hi_50</td>
              <td className={this.state.gameState['hi_51'] === 1 ? 'colored': 'non-colored'} id='51' onClick = {() => {this.actState(document.getElementById('51').innerHTML)}}>hi_51</td>
              <td className={this.state.gameState['hi_52'] === 1 ? 'colored': 'non-colored'} id='52' onClick = {() => {this.actState(document.getElementById('52').innerHTML)}}>hi_52</td>
              <td className={this.state.gameState['hi_53'] === 1 ? 'colored': 'non-colored'} id='53' onClick = {() => {this.actState(document.getElementById('53').innerHTML)}}>hi_53</td>
              <td className={this.state.gameState['hi_54'] === 1 ? 'colored': 'non-colored'} id='54' onClick = {() => {this.actState(document.getElementById('54').innerHTML)}}>hi_54</td>
              <td className={this.state.gameState['hi_55'] === 1 ? 'colored': 'non-colored'} id='55' onClick = {() => {this.actState(document.getElementById('55').innerHTML)}}>hi_55</td>
              <td className={this.state.gameState['hi_56'] === 1 ? 'colored': 'non-colored'} id='56' onClick = {() => {this.actState(document.getElementById('56').innerHTML)}}>hi_56</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_60'] === 1 ? 'colored': 'non-colored'} id='60' onClick = {() => {this.actState(document.getElementById('60').innerHTML)}}>hi_60</td>
              <td className={this.state.gameState['hi_61'] === 1 ? 'colored': 'non-colored'} id='61' onClick = {() => {this.actState(document.getElementById('61').innerHTML)}}>hi_61</td>
              <td className={this.state.gameState['hi_62'] === 1 ? 'colored': 'non-colored'} id='62' onClick = {() => {this.actState(document.getElementById('62').innerHTML)}}>hi_62</td>
              <td className={this.state.gameState['hi_63'] === 1 ? 'colored': 'non-colored'} id='63' onClick = {() => {this.actState(document.getElementById('63').innerHTML)}}>hi_63</td>
              <td className={this.state.gameState['hi_64'] === 1 ? 'colored': 'non-colored'} id='64' onClick = {() => {this.actState(document.getElementById('64').innerHTML)}}>hi_64</td>
              <td className={this.state.gameState['hi_65'] === 1 ? 'colored': 'non-colored'} id='65' onClick = {() => {this.actState(document.getElementById('65').innerHTML)}}>hi_65</td>
              <td className={this.state.gameState['hi_66'] === 1 ? 'colored': 'non-colored'} id='66' onClick = {() => {this.actState(document.getElementById('66').innerHTML)}}>hi_66</td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default App;
