// setTimeout(function(){
//     console.log("3 seconds have passed");
// }, 3000);

var time=0;
setInterval(function(){
    time += 2;
    console.log(time +" seconds have passed");
}, 2000);