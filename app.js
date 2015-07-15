var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];
var allEmployees = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

while(confirm("Do you need to enter more employees?")) {
	var empName = prompt("Enter a name");
	var empId = prompt("Enter an ID");
	var empSalary = prompt("Enter a salary");
	var empRating = parseInt(prompt("Enter their review rating"));
	var newEmployee = [
			empName,
			empId,
			empSalary,
			empRating];
	allEmployees.push(newEmployee);
}

allEmployees.map(function(item) {
	buildEmployee(item);
});

function buildEmployee(employee) {
	var empName = employee[0];
	var empId = employee[1];
	var empSalary = parseInt(employee[2]);
	var empRating = employee[3];

	var bonusMod = calcBaseBonusMod(empRating);
	if(empRating > 2) {
		bonusMod = extraEvents(empId, empSalary, bonusMod);
	}
	

	var bonus = bonusMod * empSalary;
	var totalPay = bonus + empSalary;

	var updatedEmployee = [
		empName,
		bonusMod,
		totalPay,
		Math.ceil(bonus)
	];

	console.log(updatedEmployee);
	return updatedEmployee;
}

function calcBaseBonusMod(empRating) {
	var bonusMod = 0;
	switch(empRating) {
		case 5:
			bonusMod += .1;
			break;

		case 4:
			bonusMod += .06;
			break;

		case 3:
			bonusMod += .04;
			break;
	}
	return bonusMod;
} 

function extraEvents(empId, empSalary, bonusMod) {
	if (empId.length < 5) {
		bonusMod+=.05;

	}
	if (empSalary > 65000) {
		bonusMod -= .01;
	}

	if (bonusMod > .13) {
		bonusMod = .13;
	}
	return bonusMod;
}