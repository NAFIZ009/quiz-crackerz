import React from 'react';
import { Link } from 'react-router-dom';
const Topic = ({topic}) => {
    const {id,name,logo,total}=topic;
    return (
        <div className="col m-0 px-5">
        <div className="card m-0 p-0" style={{
            width: '70%',
            height: '56%',
        }}>
          <img src={logo} className={`card-img-top w-100 h-100 ${id===5&&'bg-dark'}`}  alt="..."/>
          <div className="card-body">
            <h5 className="card-title m-0 p-0">{name}</h5>
            <small>Total Quiz{total}</small><br />
            <button className='btn btn-primary'>
                <Link style={{
                    textDecoration: 'none',
                    color: 'white'
                }} to={`/topics/${id}`}>Start Quiz</Link>
            </button>
          </div>
        </div>
        </div>
    );
};

export default Topic;