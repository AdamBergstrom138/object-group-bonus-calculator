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


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
/*
### Individual Bonus Rules

- Those who have a rating of a 2 or below should not receive a bonus.
- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
- If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
and should receive an additional 5%.
- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
- No bonus can be above 13% or below 0% total.

*/



// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  console.log('in calculateIndividualEmployeeBonus');
  let bonus;
  if( employee.reviewRating <= 2) {
    //no bonus 
    bonus = 0;
  } else if (employee.reviewRating === 3) {
    bonus = employee.annualSalary * .04;
    //4% of base for bonus
  } else if (employee.reviewRating === 4) {
    bonus = employee.annualSalary * .06;
    //6% of base bonus
  } else {
    bonus = employee.annualSalary * .1;
    //10% of base bonus
  }
  return bonus
  // return new object with bonus results

}
//calculateIndividualEmployeeBonus(Atticus);

//calculateIndividualEmployeeBonus(employees[1]);
//console.log(calculateIndividualEmployeeBonus(employees[1]));
reviewBonus = calculateIndividualEmployeeBonus(employees[1]);

function calculateEmployeeTimeBonus ( employee ){
  if (employee.employeeNumber > 999 || employee.employeeNumber < 9999){
    bonus = employee.annualSalary * .05
  }
  return bonus

}//end function
timeBonus = calculateEmployeeTimeBonus(employees[1])
console.log(calculateEmployeeTimeBonus(employees[1]));

function addItAll (time , review, base) {
  return Number(time) + Number(review) + Number(base);
}

//addItAll(timeBonus, reviewBonus, employees[1].annualSalary)
console.log(addItAll(timeBonus, reviewBonus, employees[1].annualSalary));

function tooMuchMoney(tooMuch){
   answer = tooMuch * .99;
   return answer
}

console.log(tooMuchMoney(addItAll(timeBonus, reviewBonus, employees[1].annualSalary)));


function calculateAll(employee){
for (i=0; i<employees.length; i++){
  console.log(calculateIndividualEmployeeBonus( employees[i] ), ' Employee seniority bonus');
  console.log(calculateEmployeeTimeBonus ( employees[i] ),' time bonus');
  //calculateIndividualEmployeeBonus( employees[i] );
  //calculateEmployeeTimeBonus ( employees[i] );
}
}
calculateAll(employees);