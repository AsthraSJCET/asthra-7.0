import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { gapi } from 'gapi-script';
import { publicAPI } from './api';

let clientId = '901126178102-dnuqnlk85lul70qhblvem0a0qofgb1ba.apps.googleusercontent.com';
const getToken = (key) => {
    return localStorage.getItem(key) || null;
};
const setUserSession = (key, token) => {
    localStorage.setItem(key, token);
};
const removeUserSession = (key) => {
    localStorage.removeItem(key);
};

const GoogleAuthLogin = (props) => {
    let authkey = props.authkey;
    const navigate = useNavigate();
    const handleLoginSucces = async googleData => {
        console.log(googleData);
        publicAPI.post('/uplog', { credential: googleData.tokenId }).then((response) => {
            console.log(response.data)
            setUserSession(authkey, JSON.stringify(response.data));
            navigate(0);
        }).catch(e => {
            console.log(e);
        })

    }
    const handleLoginError = async googleData => {
        navigate(0);
    }
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId });
        })
    }, [])
    return (
        <GoogleLogin
            clientId={clientId}
            isSignedIn={true}
            buttonText={!props.text ? "Log in with Google" : props.text}
            onSuccess={handleLoginSucces}
            onFailure={handleLoginError}
        />
    )
}
const GoogleAuthLogout = (props) => {
    let authkey = props.authkey;
    const navigate = useNavigate();
    let logout = () => {
        removeUserSession(authkey);
        navigate(0);
    }
    return (
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={logout}
        />
    )
}

export { GoogleAuthLogin, GoogleAuthLogout, setUserSession, removeUserSession, getToken }