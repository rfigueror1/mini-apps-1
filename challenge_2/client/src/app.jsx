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
    axios.get('/report').then(function(res){console.log(res)}).catch(function(err){console.log(err, 'problem with the get')});
  }

  addInfo(info){//pending
    axios.post('/report', info).then((response) => {console.log(response)}).catch(err => console.log(err,'error posting info'));
  }

  render(){
    return(
      <form action="/report" method="post">
        <div>
          <textarea id="msg" name="user_message"></textarea>
          <button onClick = {() => {
            var JsonData = document.getElementById('msg').value
            getAllInfo();}}> Post data</button>
        </div>
      </form>
    )
  }
}

export default App;
