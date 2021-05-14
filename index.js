// Write your solution in this file!
const driver = {};
// driver is a variable with nested attributes

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value});
    // Object.assign(target, source) takes in a target and a source as parameters.
    // .assign() copies all properties from a source object to a target object
    // .assign() returns the target object
    // Object.assign() is a constructor method. 
    // used to copy values and properties from one or more source objects to a target object.
    // it invokes getters and setters
};


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
};



function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
    
};




function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]; 
    return driver;

};