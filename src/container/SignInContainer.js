import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SignIn from '../components/SignIn';
import { clickSignInBtn, setEmail, setUserName, setPassword, setEmailError, setPasswordError, setSignInError, eraseEmailError, erasePasswordError, eraseSignInError, changeLoggedInState } from '../modules/signIn';

const SignInContainer = () => {
    const isClickedSignInBtn = useSelector(state => state.signIn.isClickedSignInBtn);
    const email = useSelector(state => state.signIn.email);
    const userName = useSelector(state => state.signIn.userName);
    const password = useSelector(state => state.signIn.password);
    const emailErrorMsg = useSelector(state => state.signIn.emailErrorMsg);
    const passwordErrorMsg = useSelector(state => state.signIn.passwordErrorMsg);
    const signInErrorMsg = useSelector(state => state.signIn.signInErrorMsg);
    const isLoggedIn = useSelector(state => state.signIn.isLoggedIn)

    const dispatch = useDispatch();
    const clickSignIn = useCallback(() => dispatch(clickSignInBtn()), [dispatch]);
    const setEmailValue = useCallback((email) => dispatch(setEmail(email)), [dispatch]);
    const setUserNameValue = useCallback((userName) => dispatch(setUserName(userName)), [dispatch]);
    const setPasswordValue = useCallback((password) => dispatch(setPassword(password)), [dispatch]);
    
    const setEmailErrorMsg = useCallback((error) => dispatch(setEmailError(error)), [dispatch]);
    const setPasswordErrorMsg = useCallback((error) => dispatch(setPasswordError(error)), [dispatch]);
    const setSignInErrorMsg = useCallback((error) => dispatch(setSignInError(error)), [dispatch]);

    const eraseEmailErrorMsg = useCallback(() => dispatch(eraseEmailError()), [dispatch]);
    const erasePasswordErrorMsg = useCallback(() => dispatch(erasePasswordError()), [dispatch]);
    const eraseSignInErrorMsg = useCallback(() => dispatch(eraseSignInError()), [dispatch ]);
    
    const changeLoggedIn = useCallback(() => dispatch(changeLoggedInState()), [dispatch])

    return (
       <SignIn 
            isClickedSignInBtn={isClickedSignInBtn}
            email={email}
            userName={userName}
            password={password}
            emailErrorMsg={emailErrorMsg}
            passwordErrorMsg={passwordErrorMsg}
            signInErrorMsg={signInErrorMsg}
            clickSignIn={clickSignIn}
            setEmailValue={setEmailValue}
            setUserNameValue={setUserNameValue}
            setPasswordValue={setPasswordValue}
            setEmailErrorMsg={setEmailErrorMsg}
            setPasswordErrorMsg={setPasswordErrorMsg}
            setSignInErrorMsg={setSignInErrorMsg}
            eraseEmailErrorMsg={eraseEmailErrorMsg}
            erasePasswordErrorMsg={erasePasswordErrorMsg}
            eraseSignInErrorMsg={eraseSignInErrorMsg}
            isLoggedIn={isLoggedIn}
            changeLoggedIn={changeLoggedIn}
       />
    );
};


export default React.memo(SignInContainer);