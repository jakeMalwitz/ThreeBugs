// ! ! !
// Three Bugs

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];
	//BUG, need to connect with loop and i in order to store each element into proper place
  newArray[0] = array[i]; // employee name
  var employeeNumber = array[i][1];
  var baseSalary = array[i][2];
  var reviewScore = array[i][3];
	console.log("Harry Potter", reviewScore, employeeNumber, baseSalary);

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus; // percentage of STI employee to receive
	//BUG, need to round up to avoid so many decimal places.
  newArray[2] = Math.round((baseSalary * (1.0 + bonus))); // adjusted annual compensation
  newArray[3] = Math.round((baseSalary * bonus)); //total bonus rounded to nearest dollar
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent = 0;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
  }
	//BUG, no need to subtract 1.
  return basePercent;
}

//Works
function getYearAdjustment(employeeNumber){
	var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}
//BUG, ParseInt salary to a number & math is wrong, should subract from incomeAdjustment
function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment -= 0.01;
  }
  return incomeAdjustment;
}
