import React, { useContext, useState } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    var googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogle =() => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          setUser(user);
          setLoggedInUser(user);
          history.replace(from);
          setUserToken();
          sessionStorage.setItem('userToken', user.displayName);

        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
        });
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          sessionStorage.setItem('token', idToken)
        }).catch(function(error) {
          // Handle error
        });
      }
    return (
        <div className="mt-5 google-sign-btn">
            <span onClick={()=> handleGoogle()}><FontAwesomeIcon icon={faGoogle}/></span>
            <span><FontAwesomeIcon icon={faFacebook}/></span>
            <span><FontAwesomeIcon icon={faInstagram}/></span>
        </div>
    );
};

export default Login;