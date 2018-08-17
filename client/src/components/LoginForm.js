import React, {Component} from 'react';



class LoginForm extends Component {

    state = {
      email: "",
      password: ""
    };


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.id]: event.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return(
      <form className='ClassForm'>
          <h2>Login</h2>
            <div className='form-group'>
            <label htmlFor = 'email' > Email address </label>
            <input type = 'email' className = 'form-control' name='email'/>
            </div>
            <div className = 'form-group'>
            <label htmlFor = 'password' > Password </label>
            <input type = 'password' className = 'form-control' name = 'password'/>
            </div>
            <button type = 'submit' className = 'btn btn - primary' >
            Login
            </button>
        </form>
    );
  }
}

export default LoginForm


