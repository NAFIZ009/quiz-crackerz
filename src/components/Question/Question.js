
import React, { useState } from 'react';
import answerCheking from '../../utilitis/answerCheking';

const Question = ({questions,index}) => {
    const {question,options,correctAnswer,id}=questions;
    const [check,setCheck]=useState(false);
    return (
        <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                {question.includes('<p>')?question.slice(3,-4):question}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                    <form>
                      { 
                        options.map((option,i)=>{
                          return (
                            <div className='d-block'>
                            <input type="radio" name="option" {...(check&&{disabled:true})} id={index.toString()+i.toString()} onChange={(event)=>answerCheking(event,correctAnswer,setCheck)} value={option}/><label for={index.toString()+i.toString()}>{option}</label>
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