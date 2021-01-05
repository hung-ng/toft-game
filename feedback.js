document.getElementById('info').addEventListener('submit',function(event){
    event.preventDefault();
    const feedback = {feedback: document.getElementById('info').Feedback.value,}  
    // validate(feedback);
    console.log(feedback)
})