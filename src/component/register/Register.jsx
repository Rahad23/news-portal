import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from './../privateRoute/PrivateRoute';

const Register = () => {
    const {createUserEmailPassworD, emailVerification} = useContext(AuthContext);
    // show error message 
    const [errorMessage, setErrorMessage]= useState('');
    // redirect to login
    const redirect = useNavigate();
    const createUser =(event)=>{
        event.preventDefault();
        const target = event.target;
        const name = target.name.value;
        const email = target.email.value;
        const password = target.password.value;
        console.log(name, email, password);

        createUserEmailPassworD(email, password)
        .then((userCredential) => {
            emailverification();
            // Signed in 
            toast.success("Register Success Full");
            const user = userCredential.user;
            // console.log(user);
            redirect("/login");
            target.reset();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            // console.log(errorMessage);
            toast.error(errorMessage);
            // ..
          });
    }
    const emailverification = ()=>{
        emailVerification()
        .then(() => {
            toast.success("Check your email spam folder. And verify your email", {
                autoClose: 5000,
            });
          })
    }
    return (
        <div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Register now!</h1>
      <p className="py-6 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={createUser} action=''>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">

            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Register</button>
        </div>
    </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;