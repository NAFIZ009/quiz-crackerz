

const loader = async({params}) => {
    if(params.id){
        const data=await fetch('https://openapi.programming-hero.com/api/quiz/2');
        const questions=await data.json();
        console.log(questions);
        return questions;
    }else{
        const data= await fetch('https://openapi.programming-hero.com/api/quiz');
        const topics= await data.json();
        return topics;
    }
    
};

export default loader;