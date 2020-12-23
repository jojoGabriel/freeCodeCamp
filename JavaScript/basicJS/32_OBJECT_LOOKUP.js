function lookupGrade(grade) {

    var gradeDesc = {
        1: "Retrain",
        2: "Needs Improvement",
        3: "Meets Expectation",
        4: "Above Expectation",
        5: "Excellent"
    }

    return gradeDesc[grade];
}

console.log(lookupGrade(3));