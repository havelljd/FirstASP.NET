let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    let sGradeOutput = "";
    let iAssignmentInput = document.getElementById("assignmentinput").value;

    let iGroup = document.getElementById("groupinput").value
    let iQuiz = document.getElementById("quizinput").value
    let iExam = document.getElementById("examinput").value
    let iIntex = document.getElementById("intexinput").value

    let iGrade = parseFloat(parseFloat(iAssignmentInput) * .5) + parseFloat(parseFloat(iGroup) * .1) + parseFloat(parseFloat(iQuiz) * .1) + parseFloat(parseFloat(iExam) * .2) + parseFloat(parseFloat(iIntex) * .1);


    if (iGrade >= 93) {
        sGradeOutput = "A";
    }
    else if (iGrade >= 90 && iGrade < 93) {
        sGradeOutput = "A-";
    }
    else if (iGrade >= 87 && iGrade < 90) {
        sGradeOutput = "B+";
    }
    else if (iGrade >= 83 && iGrade < 87) {
        sGradeOutput = "B";
    }
    else if (iGrade >= 80 && iGrade < 83) {
        sGradeOutput = "B-";
    }
    else if (iGrade >= 77 && iGrade < 80) {
        sGradeOutput = "C+";
    }
    else if (iGrade >= 73 && iGrade < 77) {
        sGradeOutput = "C";
    }
    else if (iGrade >= 70 && iGrade < 73) {
        sGradeOutput = "C-";
    }
    else if (iGrade >= 67 && iGrade < 70) {
        sGradeOutput = "D+";
    }
    else if (iGrade >= 63 && iGrade < 67) {
        sGradeOutput = "D";
    }
    else if (iGrade >= 60 && iGrade < 63) {
        sGradeOutput = "D-";
    }
    else {
        sGradeOutput = "F";
    }
    document.getElementById("output").innerHTML = String(sGradeOutput) + " " + String(iGrade);
}
)

