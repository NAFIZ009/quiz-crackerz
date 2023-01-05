import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';

const DeleteAccount = () => {
    const {user,deleteAccount,reauth}=useContext(Context);
    const navigate=useNavigate();
    const submitBtn=e=>{
        e.preventDefault();
        const email=user.userInfo.email;
        const password=e.target.password.value;
        reauth(email,password)
        .then(()=>{
            deleteAccount(email)
            .then(()=>{
                navigate('/signup');
            });

        })
    }
    return (
        <div>
        <div class="card shadow rounded w-25 mx-auto mt-5 py-4 px-2">
        <div class="card-body">
        <form onSubmit={submitBtn}>
        <h3 className='text-danger'>Delete Account</h3>
        <p className=''>Delete Account of <span className='fw-bold'>{user.userInfo.email}</span></p>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" name='password' class="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" class="btn btn-danger">Delete Account</button>
      </form>
        </div>
      </div>
        </div>
    );
};

export default DeleteAccount;