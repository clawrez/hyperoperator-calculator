$(document).ready(function(){

var output = 0;
var operator = 0;
var operatorn = 0;
var input1 = document.getElementById("input1");
var input2 = document.getElementById("operator");
var input3 = document.getElementById("input2");


$("#solve").click(function(){
    operator = document.getElementById("operator").value;
    console.log(operator);
    operator = 2+operator*1;
    console.log(operator);
    operatorn = document.getElementById("operator").value;
    if (Math.floor(operatorn) == operatorn){
        hyper3();
    }else{
        $("#output").html("Operator value must be a non-negative integer.");
    }
    // if($("#operator").val() == "hyper3"){
    // }else if($("#operator").val() == "hyper4"){
    //     hyper4();
    // }else if($("#operator").val() == "hyper5"){
    //     hyper5(); 
    // }
});

function hyper3(amount1,amount2) {
    amount1 = document.getElementById("input1").value;

    amount2 = document.getElementById("input2").value;

    output = ExpantaNum.hyper(operator)(amount1,amount2).toString();
    $("#output").html(output);
}

input1.addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("solve").click();
    }
});

input2.addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("solve").click();
    }
});

input3.addEventListener("keypress",function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        document.getElementById("solve").click();
    }
});
// function hyper4(amount1,amount2) {
//     amount1 = document.getElementById("input1").value;
//     amount2 = document.getElementById("input2").value;
//     output = ExpantaNum.hyper(4)(amount1,amount2).toString();
//     $("#output").html(output);
// }

// function hyper5(amount1,amount2) {
//     amount1 = document.getElementById("input1").value;
//     amount2 = document.getElementById("input2").value;
//     output = ExpantaNum.hyper(5)(amount1,amount2).toString();
//     $("#output").html(output);
// }



/*function outputResults(){
    ("#output3").html(format(output3no));
}

*/});