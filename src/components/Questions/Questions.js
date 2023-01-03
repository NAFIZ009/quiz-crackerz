import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import Question from '../Question/Question';
import { format } from 'date-fns';

const Questions = () => {
    const navigate=useNavigate();
    const {user}=useContext(Context);
    const questions=useLoaderData();
    const [answerBoard,setAnswerBoard]=useState({
        RightAnswer:0,
        WrongAnswer:0,
        AnswerOpened:0,
        answered:0
    });
    
    const {data}=questions;

    if(answerBoard.answered===data.questions.length){
        const date=new Date();
        fetch(`http://localhost:5000/result/${user.email}`,{
            method:'POST',
            headers:{
                "content-type": "application/json",
            },
            body:JSON.stringify({
                logo:data.logo,
                email:user.email,
                quizName:data.name,
                RightAnswer:answerBoard.RightAnswer,
                WrongAnswer:answerBoard.WrongAnswer,
                AnswerOpened:answerBoard.AnswerOpened,
                date:format(date,"PP")
            })
        })
        .then(res=>res.json())
        .then(data=>{
            const {status,result}=data;
            if(status){
                navigate(`/result/${result.insertedId}`);
            }
        });
    }

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