    $("#output").innerHTML = localStorage.getItem("output");

       var submit = $("submit")

    $("#submit").bind("click", function () {
        //just getting all the variables, converting to floats, assigning correct percentages based on the class, and then pushing it out to a p tag on the page

        let sGradeOutput = "";
        let iAssignmentInput = $("#assignmentinput")[0].value;

        let iGroup = $("#groupinput")[0].value;
        let iQuiz = $("#quizinput")[0].value;
        let iExam = $("#examinput")[0].value;
        let iIntex = $("#intexinput")[0].value;

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
        //alert(String(sGradeOutput) + "         " + String(iGrade));

        let result = String(sGradeOutput) + " " + String(iGrade)
        localStorage.setItem("output", result);
    }
);
$("#output")[0].innerHTML = localStorage.getItem("output");

