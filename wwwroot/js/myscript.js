let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    let sGradeOutput = "";
    let sGradeInput = document.getElementById("input").value;
    let iGrade = parseInt(sGradeInput);


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
    document.getElementById("output").innerHTML = sGradeOutput;
}
)

