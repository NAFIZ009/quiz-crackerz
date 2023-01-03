import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Result from '../Result/Result';

const ResultPage = () => {
    const {result}=useLoaderData();
    return (
        <div>
            {
                result.map(res=><Result result={result}/>)
            }
        </div>
    );
};

export default ResultPage;