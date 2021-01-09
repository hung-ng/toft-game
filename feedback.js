var Array = []
document.getElementById('info').addEventListener('submit',function(event){
    event.preventDefault();
    // const feedback =[];
    abc= document.getElementById('info').Feedback.value
    // validate(feedback);
    console.log(Array);
    Array.push(abc);
    console.log(Array);
    localStorage.setItem('allfeedback','');
    localStorage.allfeedback=JSON.stringify(Array);
    // localStorage.setItem('allfeedback',feedback);
    // console.log(feedback);
    document.getElementById('info').Feedback.value=""
})