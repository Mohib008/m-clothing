import React from "react";
import SignIn from '../../Components/signIn/signIn';
import SignUp from '../../Components/sign-up/sign-up';
import './signIn-signUp-page.scss';



const signInsignUpPage = () => (
    <div className="signin-signup-page">
        <SignIn />
        <SignUp />
    </div>
);


export default signInsignUpPage;