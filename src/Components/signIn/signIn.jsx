import React from 'react';

import FormInput from '../../Components/form-input/form-input';
import CustomButton from '../../Components/custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import './signIn.scss';



class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
        
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render(){
        return (
            <div className="sign-in">
                <h2 className="title">I have already account</h2>
                <span> Sign in with your email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                       name="email" 
                       type="email" 
                       handleChange={this.handleChange} 
                       value={this.state.email} 
                       label="Email" 
                       required 

                    />

                    <FormInput
                       name="password" 
                       type="password" 
                       value={this.state.password} 
                       handleChange={this.handleChange}
                       label="Password"
                       required 
                    />
                    <div className="button">
                      <CustomButton type="button"> Sign In </CustomButton>
                      <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{''} Sign In with Google {''} </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;