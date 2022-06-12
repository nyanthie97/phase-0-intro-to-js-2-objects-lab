// Write your solution in this file!
const employee = {
    name: `Gako`,
    streetAddress:`210721`
};

function updateEmployeeWithKeyAndValue(employee, key, value){
   return Object.assign({},employee,{[key]:value});

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const secondEmp ={...employee};
    delete secondEmp[key];
    return secondEmp;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}