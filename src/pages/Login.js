import React, {Component} from "react";
// import QuantityInput from '../components/quantityInput';
// import ItemList from '../components/itemList';
// import TestList from '../components/testList/testList';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { userActions } from '../_actions';

// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         // reset login status
//         // this.props.logout();
//         this.state = {
//             username: '',
//             password: '',
//             submitted: false
//         };
//         // this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     // handleChange(e) {
//     //     const { name, value } = e.target;
//     //     this.setState({ [name]: value });
//     // }

//     // handleSubmit(e) {
//     //     e.preventDefault();

//     //     this.setState({ submitted: true });
//     //     const { username, password } = this.state;
//     //     if (username && password) {
//     //         this.props.login(username, password);
//     //     }
//     // }

//     render() {
//         // const { loggingIn } = this.props;
//         const { username, password, submitted } = this.state;
//         return <div className="row">
//             <div className="col-md-6 mx-auto">
//                 <div className="card">
//                     <div className="card-body">
//                         {/* <form name="form" onSubmit={this.handleSubmit}>
//                             <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
//                                 <label htmlFor="username">Username</label>
//                                 <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
//                                 {submitted && !username &&
//                                     <div className="help-block">Username is required</div>
//                                 }
//                             </div>
//                             <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
//                                 <label htmlFor="password">Password</label>
//                                 <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
//                                 {submitted && !password &&
//                                     <div className="help-block">Password is required</div>
//                                 }
//                             </div>
//                             <div className="form-group">
//                                 <button className="btn btn-primary">Login</button>
//                                 {loggingIn &&
//                                     <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
//                                 }
//                                 <Link to="/register" className="btn btn-link">Register</Link>
//                             </div>
//                         </form> */}
//                         {/* <div className="input-group mb-2">
//                             <input type="text"
//                                 className="form-control"
//                                 onKeyPress={this.handleKeyPress} 
//                                 value={this.state.itemLabel}
//                                 onChange={this.handleChange}
//                             />
//                             <div className="input-group-append">
//                                 <button
//                                     onClick={this.addItem}
//                                     className="btn btn-outline-success"
//                                     type="button">
//                                     <i className="fa fa-plus"></i>
//                                 </button>
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     }
// }
// // function mapState(state) {
// //     const { loggingIn } = state.authentication;
// //     return { loggingIn };
// // }

// const actionCreators = {
//     login: userActions.login,
//     logout: userActions.logout
// };

// // const connectedLoginPage = connect(mapState, actionCreators)(Login);
// // export { connectedLoginPage as Login };

// // const Login = connect(mapState, actionCreators)(LoginPage);

// export default Login;




class Login extends Component {
  constructor() {
    super();
    this.state = {
        fields: {},
        errors: {}
      }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["password"] = "";
        this.setState({fields: fields});
        console.log(this.state.fields)
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="Login card mx-auto">
                    <form method="post"  name="userLoginForm" onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" data-test="username" value={this.state.fields.username} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.username}</div>

                    <label>Password</label>
                    <input type="password" name="password" data-test="password" value={this.state.fields.password} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.password}</div>

                    <input type="submit" value="Log In" data-test="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;