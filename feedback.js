var Array1 =new Array();
if(localStorage.allfeedback==undefined){
    Array1= [];
} else{
Array1 = localStorage.allfeedback.split(',');}
// if(localStorage.allfeedback.length>0){
//     // console.log(localStorage.allfeedback);
//     Array1=localStorage.getItem('allfeedback');
//     console.log(Array1);
// }
document.getElementById('info').addEventListener('submit',function(event){
    event.preventDefault();
    // const feedback =[];
    abc= document.getElementById('info').Feedback.value
    // validate(feedback);
    // console.log(Array1);
    Array1.push(abc);
    // console.log(Array1);
    localStorage.setItem('allfeedback','');
    localStorage.allfeedback=JSON.stringify(Array1);
    // localStorage.setItem('allfeedback',feedback);
    // console.log(feedback);
    document.getElementById('info').Feedback.value=""
})