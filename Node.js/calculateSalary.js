const EventEmitter = require("events");

class SalaryCalculator extends EventEmitter {
  calculateSalary(basic, ta) {
    const hra = 0.2 * basic; //HRA is 20% of basic
    const da = basic; // DA is 100% of basic
    const incometax = 0.3 * basic; //Income tax is 30% of Basic
    const professionaltax = 200; //Professional tax is 200

    const salary = basic + hra + da + ta - incometax - professionaltax;
    this.emit("calculateSalary", salary);
  }
}
const salaryCalculator = new SalaryCalculator();

salaryCalculator.on("calculateSalary", (salary) => {
  console.log(`The calculated salary is : ${salary}`);
});

salaryCalculator.calculateSalary(50000, 8000); //Basic Salary is 5000 and TA IS 80000
