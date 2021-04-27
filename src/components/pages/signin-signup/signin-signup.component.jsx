import './signin-signup.component.scss';

import SignIn from './signin-component';
import SignUp from './signup.component';
import { useState } from 'react';

function SignInSignUp() {
    const [sign, setSign] = useState(true);
    const changeSign = () => {
        setSign(!sign)
    }
    return (
        <div className="sign-part">
            {
                sign &&
                <div className="sign-in-part">
                    <SignIn changeSign={changeSign}></SignIn>
                </div>
            }

            {
                !sign &&
                <div className="sign-up-part">
                    <SignUp changeSign={changeSign}></SignUp>
                </div>
            }


        </div>
    )
}

export default SignInSignUp;