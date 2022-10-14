import React from 'react';
import './Home.css';
import img from '../../img/react-logo-b64b7471f0ebe5f7a9a281ba2f72b63a.png';
import { Link, useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics=useLoaderData();
    return (
        <div className='row row-cols-1 row-cols-sm-2'>
            <div className="col-4 header">
                <div className='layer'>                   
                </div>
                <div className="banner d-flex flex-column gap-5">
                    <h1 className=''>
                       Read,Learn & Test.
                    </h1>
                    <p className='fw-bold'>
                    <strong className='fs-5' style={{
                        color:'#0d6efd'
                    }}>Quiz Station</strong> is a complete website where you can learn by read out blogs and test your self with the help of our quiz.
                    </p>
                    <Link className='btn btn-primary w-25' to="/topics" style={{
                        textDecoration:'none',
                        color:'white'
                    }}>Start</Link>
                </div>
                <img src={img} alt="" className='animatedImg '/>
            </div>
            <div className="col-8">
                    <Topics topicsDaTa={topics} />
            </div>
        </div>
    );
};

export default Home;