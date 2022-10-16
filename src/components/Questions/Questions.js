import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions=useLoaderData();
    const [answerBoard,setAnswerBoard]=useState({
        RightAnswer:0,
        WrongAnswer:0,
        AnswerOpened:0
    });
    const {data}=questions;
    return (
                    <div className='pt-2'>
                    <h1 className='text-dark mt-2 mb-4'>{data.name}</h1>
                    <div className="answerBoard d-flex gap-4 justify-content-end mb-5 me-3  ">
                        <h5 className='text-success'>Right Answer : {answerBoard.RightAnswer}</h5>
                        <h5 className='text-danger'>Wrong Answer :{answerBoard.WrongAnswer}</h5>
                        <h5 className='text-danger'>Answer Opened :{answerBoard.AnswerOpened}</h5>
                    </div>
                    {
                        data.questions.map((question,i)=><Question key={question.id} questions={question} index={i} setAnswerBoard={setAnswerBoard}/>)
                    }
                </div>
        
    );
};

export default Questions;