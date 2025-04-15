const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] },
    { name: "David", scores: [50, 55, 60] },
    { name: "Eve", scores: [] }
  ];


  function calculateGrade(average) {
    let grade = '';

    if (average >= 90) {
      grade = 'A';
    } else if (average >= 80) {
      grade = 'B';
    } else if (average >= 70) {
      grade = 'C';
    } else if (average >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
    return grade;

  function generateReports(studentList) {
    const reports = [];
    studentList.forEach(function(student) {

      let sumOfScores = 0;
      let average = 0;

      if (student.scores.length > 0) {
        sumOfScores = student.scores.reduce(function(total, currentScore) {
          return total + currentScore;
        }, 0);

        average = sumOfScores / student.scores.length;

      } else {
        average = 0;
        sumOfScores = 0; // Sum is also 0
      }

      const grade = calculateGrade(average);

      const studentReport = {
        name: student.name,
        average: average,
        grade: grade
      };

      reports.push(studentReport);

    });

    return reports;
  }

  function generateReportsWithMap(studentList) {
      const reports = studentList.map(function(student) {


          let sumOfScores = 0;
          let average = 0;

          if (student.scores.length > 0) {

              sumOfScores = student.scores.reduce(function(total, currentScore) {
                  return total + currentScore;
              }, 0);
              average = sumOfScores / student.scores.length;

          } else {
              average = 0;
          }


          let grade = '';
          if (average >= 90) {
              grade = 'A';
          } else if (average >= 80) {
              grade = 'B';
          } else if (average >= 70) {
              grade = 'C';
          } else if (average >= 60) {
              grade = 'D';
          } else {
              grade = 'F';
          }

          const studentReport = {
              name: student.name,
              average: average,
              grade: grade
          };


          return studentReport;
      });

      return reports;
  }

  console.log("--- Using forEach and reduce ---");
  const studentReportsForEach = generateReports(students);
  console.log(studentReportsForEach);

  console.log("\n--- Using map and reduce ---");
  const studentReportsMap = generateReportsWithMap(students);
  console.log(studentReportsMap);

}