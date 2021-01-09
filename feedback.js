var Array1 =[];
console.log(typeof(Array1))
if (localStorage.allfeedback == undefined) {
    Array1 = [];
} else {
    console.log(localStorage.allfeedback);
    Array1 =JSON.parse(localStorage.allfeedback);
}
// if(localStorage.allfeedback.length>0){
//     // console.log(localStorage.allfeedback);
//     Array1=localStorage.getItem('allfeedback');
//     console.log(Array1);
// }
document.getElementById('info').addEventListener('submit', function (event) {
    event.preventDefault();
    // const feedback =[];
    abc = document.getElementById('info').Feedback.value
    // validate(feedback);
    // console.log(Array1);
    Array1.push(abc);
    // console.log(Array1);
    localStorage.setItem('allfeedback', '');
    localStorage.allfeedback = JSON.stringify(Array1);
    // localStorage.setItem('allfeedback',feedback);
    // console.log(feedback);
    document.getElementById('info').Feedback.value = ""
})