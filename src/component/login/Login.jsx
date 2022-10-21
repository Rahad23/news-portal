import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from './../privateRoute/PrivateRoute';
import { FaEye, AiFillEyeInvisible } from 'react-icons/fa';
import { type } from '@testing-library/user-event/dist/type';

const Login = () => {

    const {userLogin} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const passwordTogle =()=>{
       return setShowPassword(!showPassword);
    }
    // console.log(showPassword);
    const navigate = useNavigate();
    const loginUser =(event)=>{
        event.preventDefault();
        const target = event.target;
        const email = target.email.value;
        const password = target.password.value;
        console.log(email, password)
        userLogin(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            toast.success("Login success full");
            navigate('/home');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
          });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <p className="py-6 text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form onSubmit={loginUser} action=''>
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
          <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" 
          />         
         <div className='flex justify-start items-center mt-3'>
         <input type="checkbox" className="default:ring-2" id='click' />
          <label onClick={passwordTogle} htmlFor="" className='label-text-alt link link-hover ml-2' for="click">{showPassword ? "Hide Password": "Show Password"}</label>
         </div>
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

export default Login;