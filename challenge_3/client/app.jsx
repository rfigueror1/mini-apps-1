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

      <div className={this.state.renderState !==2 ? 'hidden' : ''} id='2'>
        <label >Address:</label>
        <input type="text" id="address" />

        <label >City:</label>
        <input type="text" id="city"/>

        <label >State:</label>
        <input type="text" id="state"/>

        <label >zip code:</label>
        <input type="text" id="zip_code"/>

        <label >phone:</label>
        <input type="text" id="phone"/>

        <button onClick = {() => {
          var address = document.getElementById('address').value;
          var city = document.getElementById('city').value;
          var state = document.getElementById('state').value;
          var zip_code = document.getElementById('zip_code').value;
          zip_code = parseInt(zip_code);
          var phone = document.getElementById('phone').value;
          phone = parseInt(phone);
          var form = this.state.renderState + '';
          var body = {address:address, city:city, state:state, zip_code:zip_code, phone:phone, form:form};
          this.postInfo(body); this.setState({renderState:3})}}> Submit </button>
      </div>

      <div className={this.state.renderState !==3 ? 'hidden' : ''} id='3'>
        <label >Card:</label>
        <input type="text" id="card" />

        <label >expiry:</label>
        <input type="text" id="expiry"/>

        <label >cvv:</label>
        <input type="text" id="cvv"/>

        <label >zip billing:</label>
        <input type="text" id="zip_billing"/>

        <button onClick = {() => {
          var card = document.getElementById('card').value;
          var expiry = document.getElementById('expiry').value;
          expiry = Date.parse(expiry);
          var cvv = document.getElementById('cvv').value;
          cvv = parseInt(cvv);
          var zip_billing = document.getElementById('zip_billing').value;
          zip_billing = parseInt(zip_billing);
          var form = this.state.renderState + '';
          var body = {card:card, expiry:expiry, cvv:cvv, zip_billing:zip_billing, form:form};
          this.postInfo(body); this.getFinalInformation(); this.setState({renderState:1})}}> Submit </button>
      </div>

    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
