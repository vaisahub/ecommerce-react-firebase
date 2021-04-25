import './signin-component.scss';
import React from 'react';
import FormInput from '../../form-input.component';
import CustomButton from '../../button-component';
import { signInWithGoogle } from '../../../firebase/firebase.util';

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
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
                    Already Have an account ?
                </h2>
                <p className="sub-title"> sign in with ou email and password </p>
                <div className="sign-in-form">

                    <form action="" onSubmit={this.handleSubmit}>
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
                        <div>
                            <CustomButton value="submit form" type="submit" >Sign in </CustomButton>
                            <CustomButton onClick={signInWithGoogle}> Sign In With Google</CustomButton>
                            <CustomButton onClick={this.props.changeSign}> Sign Up</CustomButton>
                        </div>


                    </form>


                </div>

            </div>
        )
    }

}

export default SignIn;