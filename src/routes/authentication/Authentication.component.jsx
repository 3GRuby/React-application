import {
 /*  signInWithGooglePopup,
  createUserDocumentFromAuth, */
} from "../../utils/firebase/firebase";

import Signupform from "../../components/sign-up/Signupform";
import SignInForm from "../../components/sign-in/SignInForm";

import "./authentication.scss"

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm / >
      <Signupform />
    </div>
  );
};
export default Authentication;
