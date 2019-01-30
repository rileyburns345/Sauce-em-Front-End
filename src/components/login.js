import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedInUser: null,
      error: null
    }
  }

submitSignUp = async (ev, message) => {
  console.log(message);
  ev.preventDefault()
  const response = await fetch(`http://localhost:3000/auth/signup`, {
   method: 'POST',
   headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
   body: JSON.stringify(message)
  })
  console.log('json: ', response);
  // if(response.status === 200) {
  // const json = await response.json()
  // this.setState({
  //   ...this.state,
  //   messages: [...this.state.messages, json],
  //   composing: !this.state.composing
  //   })
  // }
}

submitLogin = async (ev, message) => {
  console.log(message);
  ev.preventDefault()
  const response = await fetch(`http://localhost:3000/auth/login`, {
   method: 'POST',
   headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
   body: JSON.stringify(message)
  })
  console.log('json: ', response);
  if(response.status !== 200) {
    alert(response.message)
  }
  if(response.status === 200) {
  const json = await response.json()
  console.log(json);
  // this.setState({
  //   ...this.state,
  //   loggedInUser: ,
  //
  //   })
  }
}

emailChangeEvent = (email) => {
  console.log(email);
  this.setState({
    ...this.setState,
    email: email

  })
}

passwordChangeEvent = (password) => {
  console.log(password);
  this.setState({
    ...this.setState,
    password: password

  })
}

  render() {
    console.log(this.state);
    return (
      <section>
          <div className="alert alert-danger" role='alert' id="errorMessage" ></div>
          <form onSubmit={(ev) => this.submitSignUp(ev, {email: this.state.email, password: this.state.password})} className="form">
            <div className="form-group">
              <label>Email</label>
              <input onChange={(ev) => this.emailChangeEvent(ev.target.value)}  className="form-control" id="email" placeholder="example@gmail.com" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input onChange={(ev) => this.passwordChangeEvent(ev.target.value)} type="password" className="form-control" id="password" placeholder="******" required />
            </div>
            <button type="submit" className="btn btn-default btn-success">
              Sign Up
            </button>
          </form>

          <form onSubmit={(ev) => this.submitLogin(ev, {email: this.state.email, password: this.state.password})} className="form">
            <div className="form-group">
              <label>Email</label>
              <input onChange={(ev) => this.emailChangeEvent(ev.target.value)}  className="form-control" id="email" placeholder="example@gmail.com" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input onChange={(ev) => this.passwordChangeEvent(ev.target.value)} type="password" className="form-control" id="password" placeholder="******" required />
            </div>
            <button type="submit" className="btn btn-default btn-success">
              Login
            </button>
          </form>
        </section>
    )
  }
}

export default Login
