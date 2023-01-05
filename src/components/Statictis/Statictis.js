import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import Result from '../Result/Result';
const Statictis = () => {
    const {result}=useLoaderData();
    const {user}=useContext(Context);
    const navigate=useNavigate();
    const deleteBtn=()=>{
        navigate('/deleteAccount');
    }
    return (
        <div>
        <div class="card mb-3 w-100 bg-transparent border-0" >
  <div class="row g-0 ">
    <div class="col-md-8">
      <div class="card-body">
      <h1 className='mt-1'>Result View</h1>
          {
            result.length===0?
            <div>
              <p>You Have Not Given Any Quiz Yet. <br /> Go For The <Link to='/topics' className='text-info fw-bold' style={{textDecoration:"underline"}}>Quiz</Link>.</p>

            </div>
            :
            result.map(res=><Result result={res}/>)
          }
      </div>
    </div>
    <div class="col-md-4 pt-3">
    <h1 className='text-primary'>Profile Info</h1>
    <div class="card bg-transparent border-0 border-start w-100 d-flex justify-content-center align-items-center">
          <div className="rounded-circle w-25 text-white bg-secondary  d-flex justify-content-center align-items-center my-3" style={{height:"120px"}}><h3>{user.userInfo.name.split(" ")[0]}</h3>
          </div>
    <div class="card-body">
      <h5 class="card-title fs-2 fw-bold">{user.userInfo.name}</h5>
      <p className='text-body'>{user.userInfo.email}</p>
      <button onClick={deleteBtn} class="btn btn-danger">Delete Account</button>
    </div>
  </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Statictis;