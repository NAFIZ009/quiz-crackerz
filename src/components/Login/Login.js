import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';

const Login = () => {
    const {login,getUser}=useContext(Context);
    const navigate=useNavigate();
    const location=useLocation();
    const onSubmit = e => {
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        
        login(email,password)
        .then((user)=>{
            console.log(user);
            fetch('http://localhost:5000/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({email: email})
            })
            .then(res=>res.json())
            .then(data=>{
                const {accessToken}=data;
                localStorage.setItem('accessToken',accessToken);
                getUser(email);
                form.reset();
                navigate(location.state);
            })
        })
    };
    return (
        <div className='w-25 mx-auto card my-5 py-5 b border-0 rounded-md shadow-sm'>
        <form onSubmit={onSubmit} action="/login" className="form-signin">
            <h1 className=" mb-3 font-weight-normal text-primary fs-1 underline">Log In</h1>
            
            <input type="email" id="inputEmail" className="form-control w-75 mx-auto my-4 border-0 rounded-0 rounded-top border-bottom " name="email" placeholder="Email address" required />
            
            <input type="password" id="inputPassword" className="form-control my-4 border-0 w-75 mx-auto rounded-0 rounded-top border-bottom " name="password" placeholder="Password" required />

            <button className="btn btn-lg btn-primary btn-block " type="submit">Login</button>
            <p className="mt-5 mb-3 text-muted">New Here? <Link to='/signup'>Register</Link></p>
        </form>
      
        </div>
    );
};

export default Login;