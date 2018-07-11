import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      information: []
    }
  }

  //here goes the api
  componentDidMount(){
    this.getAllInfo();
  }

  getAllInfo(){
    axios.get('/report').then((results) => {console.log(results.data); this.setState({information:results.data})}).catch(err => console.log(err,'error fetching information'));
  }

  addInfo(info){//pending
    //turn info into json
    //info = JSON.parse(info);
    console.log(info);
    axios.post('/report', info).then((response) => {console.log(response)}).catch(err => console.log(err,'error posting info'));
  }

  print(info){
    info = JSON.parse(info);
    console.log(info);
  }

  render(){
    return(
      <form action="/report" method="post">
        <div>
          <input id="msg" name="user_message"/>
          <button onClick = {() => {
            var JsonData = document.getElementByName('msg').value;
            JsonData.replace(/\/r/g, '');
            JsonData = {body: JsonData};
            this.addInfo(JsonData);}}> Post data</button>
        </div>
      </form>
    )
  }
}

export default App;
