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

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// Figure out bonus percentage based on employee rating
function getBonusInfo( employee ) {
  let bonusPercentage;
  if ( employee.reviewRating <= 2 ) {
    bonusPercentage = 0;
  }
  else if ( employee.reviewRating === 3 ) {
    bonusPercentage = 0.04;
  }
  else if ( employee.reviewRating === 4 ){
    bonusPercentage = 0.06;
  }
  else if ( employee.reviewRating === 5 ) {
    bonusPercentage = 0.10;
  }
  // Modify the bonus based on employee number
  // because more than 4 digits means 15+ years of service
   if ( employee.employeeNumber.toString().length === 4 ) {
    bonusPercentage += 0.05;
  }
  // Take away 1% of bonus if their salary is over 65,000
  if ( employee.annualSalary > 65000 ){
    bonusPercentage -= 0.01;
  }
  // Cap bonus at 13% and above zero
   if ( bonusPercentage > 0.13 ) {
    bonusPercentage = 0.13;
  }
  if ( bonusPercentage < 0 ) {
    bonusPercentage = 0;
  } 

  /*
  bonusPercentage = Math.min( bonusPercentage, 0.13);
  bonusPercentage = Math.max( bonusPercentage, 0);
  */

  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: Number(employee.annualSalary) + Number(employee.annualSalary * bonusPercentage),
    totalBonus: Math.round(Number(employee.annualSalary * bonusPercentage)),
  };
}

$(document).ready( onReady );



function onReady ( ) {
  // Loop over the employees array
for ( let employee of employees ) {
  let bonusInfo = getBonusInfo( employee );
  console.log( `Bonus info for ${employee.name}`, bonusInfo );
  // Do some Jquery to render to the DOM
  $('#employees').append( `<li> ${employee.name} currently earns $${employee.annualSalary} and 
  earned a ${bonusInfo.bonusPercentage * 100}%, totaling $${bonusInfo.totalCompensation} </li>` );
  }
}

/*

function NewEmployeeObject( array ){
  for ( let employee of array ) {
    this.name = employee.name;
    this.bonusPercentage = calculateBonus( employee );
    this.totalComp = employee.annualSalary + employee.bonusPercentage * employee.annualSalary;
    this.totalBonus = employee.bonusPercentage * employee.annualSalary;
  }
} 

console.log( NewEmployeeObject( employees ) );

function calculateBonus ( employee ) {
    let bonusPercentage = 0;
    if ( employee.reviewRating <= 2 ) {
       bonusPercentage = 0;
    }
    else if ( employee.reviewRating === 3 ) {
      bonusPercentage = 0.04;
    } 
    else if ( employee.reviewRating === 4 ) {
      bonusPercentage = 0.06;
    } 
    else if ( employee.reviewRating === 5 ) {
      bonusPercentage = 0.1;
    }
    if ( employee.employeeNumber > 999 ) {
      bonusPercentage += 0.05;
    }
    if ( employee.annualSalary > 65000 ) {
      bonusPercentage -= 0.01;
    }
    if ( bonusPercentage > 0.13 ) {
      bonusPercentage = 0.13;
    }
    if ( bonusPercentage < 0 ) {
      bonusPercentage = 0;
    }
    employee.bonusPercentage = bonusPercentage;
    return bonusPercentage;
}

*/
