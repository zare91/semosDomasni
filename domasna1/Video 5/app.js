// function sayHi(){
//     console.log(`hi`);
// }

// sayHi();

// var sayBye = function(){
//     console.log('bye');
// };
// sayBye();

function callFunction(fun) {
    fun();
};

var sayBye = function () {
    console.log('bye');
};

callFunction(sayBye);

