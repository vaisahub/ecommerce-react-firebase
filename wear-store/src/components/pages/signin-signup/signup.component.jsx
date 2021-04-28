import './signin-component.scss';
import React from 'react';
import FormInput from '../../form-input.component';
import CustomButton from '../../button-component';
import { auth, createUserProfileDoc } from '../../../firebase/firebase.util';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            displayName: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } =  this.state;
        if(password !==  confirmPassword){
            return;
        }
       try{

        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        await createUserProfileDoc(user, {displayName});
        this.setState( {
            email: '',
            password: '',
            displayName: '',
            confirmPassword: ''
        })
       }catch (e){
           console.log('Error while creating user ',e)

       }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        const { displayName, email, password, confirmPassword } =  this.state;
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
                            name="displayName"
                            handleChange={this.handleChange}
                            value={displayName}
                            type="text"
                            required />
                        <FormInput
                            label="Email"
                            name="email"
                            handleChange={this.handleChange}
                            value={email}
                            type="email"
                            required />
                        <FormInput
                            label="Password"
                            name="password"
                            handleChange={this.handleChange}
                            value={password}
                            type="password"
                            required />
                        <FormInput
                            label="Confirm Password"
                            name="confirmPassword"
                            handleChange={this.handleChange}
                            value={confirmPassword}
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