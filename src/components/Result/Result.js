import React from 'react';

const Result = ({result}) => {
    const {logo,quizName,date,email,RightAnswer,WrongAnswer,AnswerOpened  }=result;
    return (
        <div className=' w-100'>
        
        <div class="card mb-3 mx-auto my-5 shadow" style={{maxWidth: '540px'}}>
        <div class="row g-0">
          <div class="col-md-4">
          <img src={logo} class="img-fluid rounded-start h-100" alt="..."/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Topic Name : {quizName}</h5>
              <h5 class="card-title">Giving Date : {date}</h5>
              <h5 class="card-title">User Email : {email}</h5>
              <h5 class="card-title text-success">Right Answer : {RightAnswer}</h5>
              <h5 class="card-title text-danger">Wrong Answer : {WrongAnswer}</h5>
              <h5 class="card-title text-danger">Answer Opened : {AnswerOpened}</h5>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Result;