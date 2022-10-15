const answerCheking = (e,answer,setCheck) => {
    if(e.target.checked){
        if(e.target.value === answer){
            e.target.parentElement.classList.add('text-success ');
            
        }else{
            e.target.parentElement.classList.add('text-danger');
            
        }
        setCheck(e.target.checked);
    };
    
};

export default answerCheking;