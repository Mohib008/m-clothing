import React from 'react';

import FormInput from '../../Components/form-input/form-input';
import CustomButton from '../../Components/custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase';
import './signIn.scss';



class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: "", password: "" });
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
                       name="Email" 
                       type="email" 
                       handleChange={this.handleChange} 
                       value={this.state.email} 
                       label="Email" 
                       required 

                    />

                    <FormInput
                       name="password" 
                       type="password" 
                       value={this.state.email} 
                       handleChange={this.handleChange}
                       label="Password"
                       required 
                    />

                    <CustomButton type="submit"> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle}>{''} Sign In with Google {''} </CustomButton>
                </form>
            </div>
        )
    }
}


export default SignIn;