import React, { useState } from 'react';
import answerCheking from '../../utilitis/answerCheking';

const Question = ({questions,index}) => {
    const {question,options,correctAnswer}=questions;
    const [check,setCheck]=useState(false);
    let correctAnswerIndex=options.findIndex(opt=> opt===correctAnswer);
    return (
        <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-5 p-5 border-end border-primary">
                <h3>
                  {question.includes('<p>')?question.slice(3,-4):question}
                </h3>
              </div>
              <div className="col-md-7 d-flex">
                <div className="card-body d-flex justify-content-center" >
                    <form className='d-flex flex-column align-items-center justify-content-center gap-3 py-2'>
                      { 
                        options.map((option,i)=>{
                          return (
                            <div className={`fw-bold fs-5 d-flex align-items-baseline ${check&&correctAnswerIndex===i&&'text-success'}`}>
                            <input type="radio" className='me-2' name="option" {...(check&&{disabled:true})} id={index.toString()+i.toString()} onChange={(event)=>answerCheking(event,correctAnswer,setCheck)} value={option}/><label for={index.toString()+i.toString()}>{option}</label>
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