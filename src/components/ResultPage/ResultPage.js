import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Result from '../Result/Result';

const ResultPage = () => {
    const {result}=useLoaderData();
    const [data]=result;
    return (
        <div>
        <h1 className='mt-1'>Result View</h1>
            {
                result.map(res=><Result result={data}/>)
            }
        </div>
    );
};

export default ResultPage;