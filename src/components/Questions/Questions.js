import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions=useLoaderData();
    const {data}=questions;
    console.log(data.questions);
    return (
        <div className='pt-2'>
            <h1 className='text-dark'>{data.name}</h1>
            {
                data.questions.map((question,i)=><Question key={question.id} questions={question} index={i}/>)
            }
        </div>
    );
};

export default Questions;