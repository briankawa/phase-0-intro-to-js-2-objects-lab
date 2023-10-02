// Write your solution in this file!
let employee = {name: "John Mark", streetAddress: "851 Avenue Lane"};
console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key, value){
let updated = {...employee, [key]: value};
return updated;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value;

return employee;
}
function deleteFromEmployeeByKey(employee, key){
let newEmployee = {...employee};
delete newEmployee[key];
return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key];
return employee; 
}
