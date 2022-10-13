import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions=useLoaderData();
    const {data}=questions;
    return (
        <div className='pt-2'>
            <h1 className='text-dark'>{data.name}</h1>
            {
                questions.questions.map(question=><Question key={question.id} questions={question}/>)
            }
        </div>
    );
};

export default Questions;