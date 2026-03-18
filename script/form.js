const firstNameInput = document.getElementById('first_name');
const lastNameInput = document.getElementById('last_name');
const emailInput = document.getElementById('email');
const assignedCourseInput = document.getElementById('assigned_course');

const submitBtn = document.getElementById('submit_btn');

// ternary operator
// const allExamInfo = localStorage.getItem('examInfo') ? JSON.parse(localStorage.getItem('examInfo')) : [];

let allExamInfo = [];

const rawData = localStorage.getItem('examInfo');
if(rawData){
   allExamInfo =  JSON.parse(rawData)
} else {
    allExamInfo = [];
}

console.log("all exam info", allExamInfo)

// Add event listener to the submit button
submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); 

    const examInfo = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        assignedCourse: assignedCourseInput.value
    }

    console.log("Exam Info:", examInfo);
allExamInfo.push(examInfo);

localStorage.setItem("examInfo", JSON.stringify(allExamInfo))

alert("saved successfully")

});
/*
TASK::

create a form to add assigned course. and work on the add functionality
*/