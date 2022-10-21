import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import {FaGithub, FaGoogle } from 'react-icons/fa';
import Courosel from '../../courosel/Courosel';
import { AuthContext } from '../../privateRoute/PrivateRoute';
import ButtonGroup from './../../buttonGroup/ButtonGroup';

const LeftComponent = () => {
    const {userDocument ,googlePopuplogin} = useContext(AuthContext);
    const loginPopup = ()=>{
        googlePopuplogin()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
    if(userDocument?.email){
        return (
            <div className='text-center'>
                <div>
                    <ButtonGroup></ButtonGroup>
                </div>
                <div>
                    <Courosel></Courosel>
                </div>
            </div>
        );
    }else{
       return <div className='text-center'>
                <button onClick={loginPopup} className="btn btn-active bg-[#e84393] w-full w-9/12 mx-auto mt-5 border-none "><FaGoogle className='mr-2 font-bold text-3xl'/>Sign-In with google</button>
                <button className="btn btn-active bg-[#29151f] w-full w-9/12 mx-auto mt-1 border-none"><FaGithub className='mr-2 font-bold text-3xl'/> Sign-In with Git-hub</button>
                <div>
                    <ButtonGroup></ButtonGroup>
                </div>
                <div>
                    <Courosel></Courosel>
                </div>
            </div>
    }
    }
    

export default LeftComponent;