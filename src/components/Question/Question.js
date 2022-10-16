import React, { useState } from 'react';
import answerCheking from '../../utilitis/answerCheking';

const Question = ({questions,index,setAnswerBoard}) => {
    const {question,options,correctAnswer}=questions;
    const [check,setCheck]=useState(false);
    const [showCorrectAnswer,setShowCorrectAnswer]=useState(false);
    let correctAnswerIndex=options.findIndex(opt=> opt===correctAnswer);
    return (
        <div className="card border-0 mb-3">
            <div className="row g-0">
              <div className="col-md-5 p-5 border rounded-1 border-primary">
                <h3>
                  {index+1}. 
                  {question.includes('<p>')?question.slice(3,-4):question}
                </h3>
              </div>
              <div className="col-md-7 d-flex pt-3 border border-info rounded-1">
                <div className="card-body d-flex justify-content-center" >
                    <form className='d-flex flex-column align-items-center justify-content-center gap-3 py-2'>
                    <button onClick={(e)=>{
                      e.preventDefault();
                      setShowCorrectAnswer(true);
                      setCheck(true);
                      setAnswerBoard(prev=>{return {...prev,AnswerOpened:prev.AnswerOpened+1}})
                    }} {...(check&&{disabled:true})} className='btn btn-danger' style={{
                      position: 'absolute',
                      top:'2px',
                      right: '10px'
                    }}>ANS</button>
                      { 
                        options.map((option,i)=>{
                          return (
                            <div className={`fw-bold fs-5 d-flex align-items-baseline ${check&&correctAnswerIndex===i &&'text-success'} ${showCorrectAnswer&&correctAnswerIndex===i &&'text-success'}`}>
                            <input type="radio" className='me-2' name="option" {...(check&&{disabled:true})} id={index.toString()+i.toString()} onChange={(event)=>answerCheking(event,correctAnswer,setCheck,setAnswerBoard)} value={option}/><label for={index.toString()+i.toString()}>{option}</label>
                            </div>
                            )
                        })
                      }
                    </form>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Question;