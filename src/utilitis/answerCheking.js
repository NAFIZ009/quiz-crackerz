const answerCheking = (e,answer,setCheck,setAnswerBoard) => {
    if(e.target.checked){
        if(e.target.value === answer){
            e.target.parentElement.classList.add('text-success');
            setAnswerBoard(prev=>{return {...prev,RightAnswer:prev.RightAnswer+1,answered:prev.answered+1}})
        }else{
            e.target.parentElement.classList.add('text-danger');
            setAnswerBoard(prev=>{return {...prev,WrongAnswer:prev.WrongAnswer+1,answered:prev.answered+1}})
        }
        setCheck(true);
    };
    
};

export default answerCheking;