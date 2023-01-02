import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';

const Signup = () => {
    const {register,setName,getUser}=useContext(Context);
    const navigate=useNavigate();
    const onSubmit = e => {
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        register(email,password)
        .then((user)=>{
            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({email,name})
            })
            .then(res=>res.json())
            .then(data=>{
                const {accessToken}=data;
                localStorage.setItem('accessToken',accessToken);
                getUser(email);
                setName(name).then(()=>{
                    form.reset();
                    navigate('/topics');
                });
            })
        })
        .catch(err=>console.log(err));
    };
    return (
        <div className='w-25 mx-auto card my-5 py-5 b border-0 rounded-md shadow-sm'>
        <form onSubmit={onSubmit} action="/login" className="form-signin">
            <h1 className=" mb-3 font-weight-normal text-primary fs-1 underline">Register</h1>
            
            <input type="text" id="inputName" className="form-control w-75 mx-auto my-4 border-0 rounded-0 rounded-top border-bottom " name="name" placeholder="Name" required />

            <input type="email" id="inputEmail" className="form-control w-75 mx-auto my-4 border-0 rounded-0 rounded-top border-bottom " name="email" placeholder="Email address" required />
            
            <input type="password" id="inputPassword" className="form-control my-4 border-0 w-75 mx-auto rounded-0 rounded-top border-bottom " name="password" placeholder="Password" required />

            <button className="btn btn-lg btn-primary btn-block " type="submit">Register</button>
            <p className="mt-5 mb-3 text-muted">Already Have An Account? <Link to='/login'>Log In</Link></p>
        </form>
      
        </div>
    );
};

export default Signup;