import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    
    }

  
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value})
    }

    render(){
        return (
           <div className="sign-in">
            <h1 className='title'>Already have an account?</h1>
            <span>Sign in with your email and password</span>
            
            <form onSubmit={this.handleSubmit}>
                <FormInput label='Email' type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
              
                <FormInput label='Password' type="password" name="password" value={this.state.password} handleChange={this.handleChange} />
             
             <div className="buttons">

               <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={ signInWithGoogle } isGoogleSignin>Sign In With Google</CustomButton>
             </div>
            
            </form>
        </div>   
        )
      
    }
}

export default SignIn;