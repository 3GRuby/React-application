import React from "react";
import { useState, } from "react";
import { useDispatch } from "react-redux";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import './signin.scss';
import FormInput from "../form-input/FormInput.component";
import Button,{ BUTTON_TYPE_CLASSES } from '../button/Button';;


const defaultFormFields = {
  email: "",
  password: ""
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    
      dispatch(emailSignInStart(email, password));
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Your password is worng')
          break;
        case 'auth/user-not-found':
          alert('Can not find user for this email')
          break;
        default:
          console.log(error.message)
  
      }

    } 
  };

  return (
    <div className="sign-up-container">
      <h2>Alredy have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle} >Google sign in</Button>
        </div>
        
      </form>
    </div>
  );
};

export default SignInForm;
