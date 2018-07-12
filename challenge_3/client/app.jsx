class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      information: [],
      renderState: 1,
    }
    this.postInfo = this.postInfo.bind(this);
  }

  getFinalInformation(){
    axios.get('/info')
      .then(function (response) {
        this.setState({information:response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  postInfo(info){
    console.log(info);
    axios.post('/info', info)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (<div>
      <div className={this.state.renderState !==1 ? 'hidden' : ''} id='1'>
        <label >Name:</label>
        <input type="text" id="uname" />

        <label >Email:</label>
        <input type="text" id="email"/>

        <label >password:</label>
        <input type="text" id="password"/>

        <button onClick = {() => {
          var name = document.getElementById('uname').value;
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          var form = this.state.renderState + '';
          var body = {name:name, email:email, password:password, form:form};
          this.postInfo(body); this.setState({renderState:2})}}> Submit </button>
      </div>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
