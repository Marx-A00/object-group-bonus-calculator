// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );

for(let employee of employees){
  console.log(employee);
}


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//

let employeeBonus = {
  
}

function calculateIndividualEmployeeBonus(employee) {
  let employeeBonus = {
    name: employee.name,

  };
  console.log(employee);

  return employeeBonus;
}


function calculateBonusPercentage(employee){
  let bonusPercentage = 0;

  if(employee.reviewRating <= 2){
    bonusPercentage = 0;
  }
  else if(employee.reviewRating === 3){
    bonusPercentage = .04;
  }
  else if(employee.reviewRating === 4){
    bonusPercentage = .06;
  }
  else if(employee.reviewRating === 5){
    bonusPercentage = .1;
  }
  if(employee.annualSalary > 65000){
    bonusPercentage -= .01;
  }

  if(employee.employeeNumber.length === 4){

    bonusPercentage += .05;
  }
  if(bonusPercentage > .13){
    bonusPercentage = .13;
  }
  else if(bonusPercentage < 0){
    bonusPercentage = 0;
  }
  let employeeBonus.bonusPercentage = bonusPercentage;
  



  return bonusPercentage;

}

function calculateBonusTotal(employee,bonusPercentage){
  employee.annualSalary * (bonusPercentage)



}
// console.log(employees[0].employeeNumber.length);

// console.log(calculateIndividualEmployeeBonus(employees[3]));
console.log("Expecting .09: ",calculateBonusPercentage(employees[0]));
console.log("Expecting .06: ",calculateBonusPercentage(employees[1]));