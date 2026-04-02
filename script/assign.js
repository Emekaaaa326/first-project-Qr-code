const courseInput = document.getElementById('course');
const instructorInput = document.getElementById('instructor_name')
const timeInput = document.getElementById('time')
const dateInput = document.getElementById('date')

const venueInput = document.getElementById('date')
const semesterInput = document.getElementById('date')

const submitBtn =document.getElementById('btn-sub')

let allExamInfo = [];

const rawData = localStorage.getItem('examInfo');
if(rawData){
   allExamInfo =  JSON.parse(rawData)
} else {
    allExamInfo = [];
}



// adding addEventListener
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const examInfo = {
        course: courseInput.value,
        instructorName: instructorInput.value,
        time: timeInput.value,
        date: dateInput.value,
        venue: venueInput.value,
        semester: semesterInput.value
    }

    // console.log("Exam info:")
    allExamInfo.push(examInfo)
    localStorage.setItem("examInfo", JSON.stringify(allExamInfo))
    alert("successfully save ma gee great job.....i love you")
})

