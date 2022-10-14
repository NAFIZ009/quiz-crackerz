

const answerCheking = (e,answer,setCheck) => {
    if(e.target.checked){
        if(e.target.value === answer){
            e.target.parentElement.className='bg-success text-light';
            
        }else{
            e.target.parentElement.className='bg-danger text-light';
            
        }
        setCheck(e.target.checked);
    };
    
};

export default answerCheking;