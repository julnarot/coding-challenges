export function gradingStudents(grades) {
    // Write your code here
    return grades.map(grade => {
        if (grade < 38) {
            return grade
        }
        let gradeRounded = grade;
        let acum = 0;
        do {
            gradeRounded = gradeRounded + 1;
            acum++;
        } while (!(gradeRounded % 5 === 0));

        if ((gradeRounded - grade) < 3) {
            return gradeRounded;
        }
        return grade
    });
}