var counter = function(arr){
    return `There are ` + arr.length + ` elements in this array`;
};

// console.log (counter([`shaun`, `crystal`, `ryu`]));

var adder = function (a,b){
    return `The sum of the 2 numbers is ${a+b}`;
}

var pi=3.142;

module.exports ={
    counter: counter,
    adder: adder,
    pi: pi
}