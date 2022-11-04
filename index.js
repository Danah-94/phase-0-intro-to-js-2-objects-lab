// Write your solution in this file!

/* We want to store each employee as an Object. We're starting small,
 so to begin with we'll only keep track of the employee's name and street address.

To start, define a employee variable and assign it to an Object containing name and streetAddress keys; 
you can use whatever values you like. Use literal syntax to create your Object. 
Various updates will be applied to this variable (destructively and non-destructively) in this lab. */

const employee = {
    name: "Mohammad",
    streetAddress: "Olaya Street"
}

/* Once you've initialized the employee Object, you'll need to create the following four functions:

1st function - updateEmployeeWithKeyAndValue(): this function should take in three arguments: a employee Object, a key and a value. 
This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in. 
Hint: use the spread operator! */



function updateEmployeeWithKeyAndValue(obj, key, value){
    const CopyOfEmployee = {...obj};
    CopyOfEmployee[key] = value;
    return CopyOfEmployee;
}

updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

/* 2nd function - destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue() 
but it should mutate the employee Object passed in. */

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;    
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

/* 3rd function - deleteFromEmployeeByKey(): this function should take in a employee Object and a key. 
It should delete the property with that key from the employee Object. 
This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair. 
Hint: use the spread operator! */

function deleteFromEmployeeByKey(obj, key){
    const newObject = {...obj};
    delete newObject[key];
    return newObject;
}

/* 4th function - destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() 
but it should mutate the employee Object. */

function destructivelyDeleteFromEmployeeByKey(obj , key){
     delete obj[key];
     return obj;
}


