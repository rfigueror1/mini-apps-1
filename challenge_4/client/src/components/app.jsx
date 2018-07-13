var React = require('react');
var reactdom = require('react-dom');
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 0,
      player: 1,
      gameState: {
        hi_00:0, hi_01:0, hi_02:0, hi_03:0, hi_04:0, hi_05:0, hi_06:0,
        hi_10:0, hi_11:0, hi_12:0, hi_13:0, hi_14:0, hi_15:0, hi_16:0,
        hi_20:0, hi_21:0, hi_22:0, hi_23:0, hi_24:0, hi_25:0, hi_26:0,
        hi_30:0, hi_31:0, hi_32:0, hi_33:0, hi_34:0, hi_35:0, hi_36:0,
        hi_40:0, hi_41:0, hi_42:0, hi_43:0, hi_44:0, hi_45:0, hi_46:0,
        hi_50:0, hi_51:0, hi_52:0, hi_53:0, hi_54:0, hi_55:0, hi_56:0,
        hi_60:0, hi_61:0, hi_62:0, hi_63:0, hi_64:0, hi_65:0, hi_66:0,
      }
    };
    this.actState = this.actState.bind(this);
    this.getGameData = this.getGameData.bind(this);
    this.postGameData = this.postGameData.bind(this);
  }

  actState(target, target_value){
    var data = this.state.gameState;
    console.log(data);
    console.log(target);
    data[target] = target_value;
    console.log(data);
    this.setState({gameState:data});
  }

  componentDidMount(){
    this.getGameData();
  }

  getGameData(){
    axios.get('/game')
    .then( (response) => {
      console.log(response.data,'response');
      var data = response.data;
      console.log(data, 'data');
      console.log(this, 'this');
      for(var i=0; i<data.length; i++){
        var x = data[i]['x'];
        var y = data[i]['y'];
        var target = 'hi_'+x+y;
        this.actState(target, 1);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  postGameData(info){
    var x = parseInt(info.charAt(3));
    var y = parseInt(info.charAt(4));
    var body = {x:x, y:y, player:this.state.player};
    axios.post('/game', body)
    .then((response) => {
      console.log(response);
      console.log(this, 'this in post');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  //PENDING FINDING SOLUTION OF GAME
  checkGame(){
    var results = this.state.gameState;
    var horizontal_results = 0;
    var r1 = [];
    var keys = Object.keys(this.state.gameState);
    var r0Keys = keys.slice(0,6);
    var r1Keys = keys.slice(8,13);
    var r2Keys = keys.slice(14,20);
    var r3Keys = keys.slice(21,27);
    var r4Keys = keys.slice(28,34);
    var r5Keys = keys.slice(35,41);
    var r6Keys = keys.slice(42,48);
  }


  render() {
    return (
        <table>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className={this.state.gameState['hi_00'] === 1 ? 'colored': 'non-colored'} id='00' onClick = {() => {this.postGameData(document.getElementById('00').innerHTML,1) ;this.getGameData()}}>hi_00</td>
              <td className={this.state.gameState['hi_01'] === 1 ? 'colored': 'non-colored'} id='01' onClick = {() => {this.postGameData(document.getElementById('01').innerHTML,1) ;this.getGameData()}}>hi_01</td>
              <td className={this.state.gameState['hi_02'] === 1 ? 'colored': 'non-colored'} id='02' onClick = {() => {this.postGameData(document.getElementById('02').innerHTML,1) ;this.getGameData()}}>hi_02</td>
              <td className={this.state.gameState['hi_03'] === 1 ? 'colored': 'non-colored'} id='03' onClick = {() => {this.postGameData(document.getElementById('03').innerHTML,1) ;this.getGameData()}}>hi_03</td>
              <td className={this.state.gameState['hi_04'] === 1 ? 'colored': 'non-colored'} id='04' onClick = {() => {this.postGameData(document.getElementById('04').innerHTML,1) ;this.getGameData()}}>hi_04</td>
              <td className={this.state.gameState['hi_05'] === 1 ? 'colored': 'non-colored'} id='05' onClick = {() => {this.postGameData(document.getElementById('05').innerHTML,1) ;this.getGameData()}}>hi_05</td>
              <td className={this.state.gameState['hi_06'] === 1 ? 'colored': 'non-colored'} id='06' onClick = {() => {this.postGameData(document.getElementById('06').innerHTML,1) ;this.getGameData()}}>hi_06</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_10'] === 1 ? 'colored': 'non-colored'} id='10' onClick = {() => {this.postGameData(document.getElementById('10').innerHTML,1) ;this.getGameData()}}>hi_10</td>
              <td className={this.state.gameState['hi_11'] === 1 ? 'colored': 'non-colored'} id='11' onClick = {() => {this.postGameData(document.getElementById('11').innerHTML,1) ;this.getGameData()}}>hi_11</td>
              <td className={this.state.gameState['hi_12'] === 1 ? 'colored': 'non-colored'} id='12' onClick = {() => {this.postGameData(document.getElementById('12').innerHTML,1) ;this.getGameData()}}>hi_12</td>
              <td className={this.state.gameState['hi_13'] === 1 ? 'colored': 'non-colored'} id='13' onClick = {() => {this.postGameData(document.getElementById('13').innerHTML,1) ;this.getGameData()}}>hi_13</td>
              <td className={this.state.gameState['hi_14'] === 1 ? 'colored': 'non-colored'} id='14' onClick = {() => {this.postGameData(document.getElementById('14').innerHTML,1) ;this.getGameData()}}>hi_14</td>
              <td className={this.state.gameState['hi_15'] === 1 ? 'colored': 'non-colored'} id='15' onClick = {() => {this.postGameData(document.getElementById('15').innerHTML,1) ;this.getGameData()}}>hi_15</td>
              <td className={this.state.gameState['hi_16'] === 1 ? 'colored': 'non-colored'} id='16' onClick = {() => {this.postGameData(document.getElementById('16').innerHTML,1) ;this.getGameData()}}>hi_16</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_20'] === 1 ? 'colored': 'non-colored'} id='20' onClick = {() => {this.postGameData(document.getElementById('20').innerHTML,1) ;this.getGameData()}}>hi_20</td>
              <td className={this.state.gameState['hi_21'] === 1 ? 'colored': 'non-colored'} id='21' onClick = {() => {this.postGameData(document.getElementById('21').innerHTML,1) ;this.getGameData()}}>hi_21</td>
              <td className={this.state.gameState['hi_22'] === 1 ? 'colored': 'non-colored'} id='22' onClick = {() => {this.postGameData(document.getElementById('22').innerHTML,1) ;this.getGameData()}}>hi_22</td>
              <td className={this.state.gameState['hi_23'] === 1 ? 'colored': 'non-colored'} id='23' onClick = {() => {this.postGameData(document.getElementById('23').innerHTML,1) ;this.getGameData()}}>hi_23</td>
              <td className={this.state.gameState['hi_24'] === 1 ? 'colored': 'non-colored'} id='24' onClick = {() => {this.postGameData(document.getElementById('24').innerHTML,1) ;this.getGameData()}}>hi_24</td>
              <td className={this.state.gameState['hi_25'] === 1 ? 'colored': 'non-colored'} id='25' onClick = {() => {this.postGameData(document.getElementById('25').innerHTML,1) ;this.getGameData()}}>hi_25</td>
              <td className={this.state.gameState['hi_26'] === 1 ? 'colored': 'non-colored'} id='26' onClick = {() => {this.postGameData(document.getElementById('26').innerHTML,1) ;this.getGameData()}}>hi_26</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_30'] === 1 ? 'colored': 'non-colored'} id='30' onClick = {() => {this.postGameData(document.getElementById('30').innerHTML,1) ;this.getGameData()}}>hi_30</td>
              <td className={this.state.gameState['hi_31'] === 1 ? 'colored': 'non-colored'} id='31' onClick = {() => {this.postGameData(document.getElementById('31').innerHTML,1) ;this.getGameData()}}>hi_31</td>
              <td className={this.state.gameState['hi_32'] === 1 ? 'colored': 'non-colored'} id='32' onClick = {() => {this.postGameData(document.getElementById('32').innerHTML,1) ;this.getGameData()}}>hi_32</td>
              <td className={this.state.gameState['hi_33'] === 1 ? 'colored': 'non-colored'} id='33' onClick = {() => {this.postGameData(document.getElementById('33').innerHTML,1) ;this.getGameData()}}>hi_33</td>
              <td className={this.state.gameState['hi_34'] === 1 ? 'colored': 'non-colored'} id='34' onClick = {() => {this.postGameData(document.getElementById('34').innerHTML,1) ;this.getGameData()}}>hi_34</td>
              <td className={this.state.gameState['hi_35'] === 1 ? 'colored': 'non-colored'} id='35' onClick = {() => {this.postGameData(document.getElementById('35').innerHTML,1) ;this.getGameData()}}>hi_35</td>
              <td className={this.state.gameState['hi_36'] === 1 ? 'colored': 'non-colored'} id='36' onClick = {() => {this.postGameData(document.getElementById('36').innerHTML,1) ;this.getGameData()}}>hi_36</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_40'] === 1 ? 'colored': 'non-colored'} id='40' onClick = {() => {this.postGameData(document.getElementById('40').innerHTML,1) ;this.getGameData()}}>hi_40</td>
              <td className={this.state.gameState['hi_41'] === 1 ? 'colored': 'non-colored'} id='41' onClick = {() => {this.postGameData(document.getElementById('41').innerHTML,1) ;this.getGameData()}}>hi_41</td>
              <td className={this.state.gameState['hi_42'] === 1 ? 'colored': 'non-colored'} id='42' onClick = {() => {this.postGameData(document.getElementById('42').innerHTML,1) ;this.getGameData()}}>hi_42</td>
              <td className={this.state.gameState['hi_43'] === 1 ? 'colored': 'non-colored'} id='43' onClick = {() => {this.postGameData(document.getElementById('43').innerHTML,1) ;this.getGameData()}}>hi_43</td>
              <td className={this.state.gameState['hi_44'] === 1 ? 'colored': 'non-colored'} id='44' onClick = {() => {this.postGameData(document.getElementById('44').innerHTML,1) ;this.getGameData()}}>hi_44</td>
              <td className={this.state.gameState['hi_45'] === 1 ? 'colored': 'non-colored'} id='45' onClick = {() => {this.postGameData(document.getElementById('45').innerHTML,1) ;this.getGameData()}}>hi_45</td>
              <td className={this.state.gameState['hi_46'] === 1 ? 'colored': 'non-colored'} id='46' onClick = {() => {this.postGameData(document.getElementById('46').innerHTML,1) ;this.getGameData()}}>hi_46</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_50'] === 1 ? 'colored': 'non-colored'} id='50' onClick = {() => {this.postGameData(document.getElementById('50').innerHTML,1) ;this.getGameData()}}>hi_50</td>
              <td className={this.state.gameState['hi_51'] === 1 ? 'colored': 'non-colored'} id='51' onClick = {() => {this.postGameData(document.getElementById('51').innerHTML,1) ;this.getGameData()}}>hi_51</td>
              <td className={this.state.gameState['hi_52'] === 1 ? 'colored': 'non-colored'} id='52' onClick = {() => {this.postGameData(document.getElementById('52').innerHTML,1) ;this.getGameData()}}>hi_52</td>
              <td className={this.state.gameState['hi_53'] === 1 ? 'colored': 'non-colored'} id='53' onClick = {() => {this.postGameData(document.getElementById('53').innerHTML,1) ;this.getGameData()}}>hi_53</td>
              <td className={this.state.gameState['hi_54'] === 1 ? 'colored': 'non-colored'} id='54' onClick = {() => {this.postGameData(document.getElementById('54').innerHTML,1) ;this.getGameData()}}>hi_54</td>
              <td className={this.state.gameState['hi_55'] === 1 ? 'colored': 'non-colored'} id='55' onClick = {() => {this.postGameData(document.getElementById('55').innerHTML,1) ;this.getGameData()}}>hi_55</td>
              <td className={this.state.gameState['hi_56'] === 1 ? 'colored': 'non-colored'} id='56' onClick = {() => {this.postGameData(document.getElementById('56').innerHTML,1) ;this.getGameData()}}>hi_56</td>
            </tr>
            <tr>
              <td className={this.state.gameState['hi_60'] === 1 ? 'colored': 'non-colored'} id='60' onClick = {() => {this.postGameData(document.getElementById('60').innerHTML,1) ;this.getGameData()}}>hi_60</td>
              <td className={this.state.gameState['hi_61'] === 1 ? 'colored': 'non-colored'} id='61' onClick = {() => {this.postGameData(document.getElementById('61').innerHTML,1) ;this.getGameData()}}>hi_61</td>
              <td className={this.state.gameState['hi_62'] === 1 ? 'colored': 'non-colored'} id='62' onClick = {() => {this.postGameData(document.getElementById('62').innerHTML,1) ;this.getGameData()}}>hi_62</td>
              <td className={this.state.gameState['hi_63'] === 1 ? 'colored': 'non-colored'} id='63' onClick = {() => {this.postGameData(document.getElementById('63').innerHTML,1) ;this.getGameData()}}>hi_63</td>
              <td className={this.state.gameState['hi_64'] === 1 ? 'colored': 'non-colored'} id='64' onClick = {() => {this.postGameData(document.getElementById('64').innerHTML,1) ;this.getGameData()}}>hi_64</td>
              <td className={this.state.gameState['hi_65'] === 1 ? 'colored': 'non-colored'} id='65' onClick = {() => {this.postGameData(document.getElementById('65').innerHTML,1) ;this.getGameData()}}>hi_65</td>
              <td className={this.state.gameState['hi_66'] === 1 ? 'colored': 'non-colored'} id='66' onClick = {() => {this.postGameData(document.getElementById('66').innerHTML,1) ;this.getGameData()}}>hi_66</td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default App;
