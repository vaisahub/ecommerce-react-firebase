import './signin-component.scss';
import React from 'react';
import FormInput from '../../form-input.component';
import CustomButton from '../../button-component';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '', password: ''
        })
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>
                    You Don't Have an account ?
                </h2>
                <p className="sub-title"> sign up with your email and password </p>
                <div className="sign-in-form">

                    <form action="" onSubmit={this.handleSubmit}>
                        <FormInput
                            label="Username"
                            name="username"
                            handleChange={this.handleChange}
                            value={this.state.name}
                            type="text"
                            required />
                        <FormInput
                            label="Email"
                            name="email"
                            handleChange={this.handleChange}
                            value={this.state.email}
                            type="email"
                            required />
                        <FormInput
                            label="Password"
                            name="password"
                            handleChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                            required />
                        <CustomButton value="submit form" type="submit">Sign up</CustomButton>
                        <CustomButton onClick={this.props.changeSign}> Sign in </CustomButton> 
                    </form>
                   
                </div>

            </div>
        )
    }

}

export default SignUp;