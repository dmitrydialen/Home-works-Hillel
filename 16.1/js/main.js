class Student {
    constructor(firstName, lastName, birthYear, grades = []) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = grades;
      this.attendance = new Array(25).fill(null);
    }
  
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const total = this.grades.reduce((acc, grade) => acc + grade, 0);
      return total / this.grades.length;
    }
  
    present() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = true;
      } else {
        console.log("Всі заняття вже заповнені.");
      }
    }
  
    absent() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
        this.attendance[index] = false;
      } else {
        console.log("Всі заняття вже заповнені.");
      }
    }
  
    getAttendanceRate() {
      const attendedClasses = this.attendance.filter(status => status === true).length;
      const attendedOrMissed = this.attendance.filter(status => status !== null).length;
      return attendedOrMissed === 0 ? 0 : attendedClasses / attendedOrMissed;
    }
  
    summary() {
      const averageGrade = this.getAverageGrade();
      const attendanceRate = this.getAttendanceRate();
  
      if (averageGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  }
  
  const student1 = new Student("Іван", "Петров", 2002, [95, 87, 93, 100, 92]);
  const student2 = new Student("Ольга", "Сидорова", 2003, [78, 82, 85, 80, 77]);
  const student3 = new Student("Анна", "Коваль", 2001, [60, 65, 70, 68, 64]);
  
  student1.present();
  student1.present();
  student1.absent();
  student2.present();
  student2.absent();
  student3.absent();
  student3.present();
  
  console.log(`${student1.firstName} ${student1.lastName}:`);
  console.log(`Вік: ${student1.getAge()}`);
  console.log(`Середній бал: ${student1.getAverageGrade()}`);
  console.log(`Відвідуваність: ${student1.getAttendanceRate()}`);
  console.log(`Резюме: ${student1.summary()}`);
  
  console.log(`${student2.firstName} ${student2.lastName}:`);
  console.log(`Вік: ${student2.getAge()}`);
  console.log(`Середній бал: ${student2.getAverageGrade()}`);
  console.log(`Відвідуваність: ${student2.getAttendanceRate()}`);
  console.log(`Резюме: ${student2.summary()}`);
  
  console.log(`${student3.firstName} ${student3.lastName}:`);
  console.log(`Вік: ${student3.getAge()}`);
  console.log(`Середній бал: ${student3.getAverageGrade()}`);
  console.log(`Відвідуваність: ${student3.getAttendanceRate()}`);
  console.log(`Резюме: ${student3.summary()}`);
  