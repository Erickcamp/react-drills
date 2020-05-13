import React, {Component} from 'react'


class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''

        }
        // this.userHandler = this.userHandler.bind(this)
        // this.passwordHandler = this.passwordHandler.bind(this)
        this.buttonHandler = this.buttonHandler.bind(this)
    }
    userHandler(val){
        this.setState({
            username: val
        })
    }
    passwordHandler(val){
        this.setState({
            password: val
        })
    }
    buttonHandler(){
        alert(`username: ${this.state.username} password: ${this.state.password}`)
    }


render(){
    return (
        <div className="Login">
            <input placeholder='username' onChange={ (e) => this.userHandler(e.target.value)}/>
            <input placeholder='password' onChange={ (e) => this.passwordHandler(e.target.value)}/>
            <button onClick={this.buttonHandler}>Login</button>
        </div>
      );
    }
}
  
  export default Login;