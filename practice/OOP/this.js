function raiseSalary(newValue) {
  this.salary += newValue
};

function promote(newTitle) {
  this.jobTitle = newTitle
};

const employees = {};
employees.bob = {
  salary: 60000,
  jobTitle: 'sales rep',
  raiseSalary,
  promote
};
employees.sarah = {
  salary: 80000,
  jobTitle: 'sales supervisor',
  raiseSalary,
  promote
}
employees.alex = {
  salary: 100000,
  jobTitle: 'sales director',
  raiseSalary,
  promote
}

employees.sarah.raiseSalary(2000)

console.log(employees.sarah.salary)