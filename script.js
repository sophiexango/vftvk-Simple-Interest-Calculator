 
var  principal,rate,years,interest;
  

function compute()
{
    principal = parseFloat(document.getElementById("principal").value);
    rate = parseFloat(document.getElementById("rate").value);
    years = parseInt(document.getElementById("years").value);
    interest = principal * years * rate / 100;
    var today=new Date();
    var thisYear=(today.getFullYear());
    var dueYear=(thisYear + years);
 
 var empt = document.getElementById("principal").value;
if (empt === "")
{
{alert("Enter a positive number!");
 document.getElementById("principal").focus();
 }
return false;
} document.getElementById("result").innerHTML =
("If you deposit " + "<var>"+ principal +"</var>"+ "<br>" +
 "at an interest rate of " + "<var>"+ rate+"%</var>.<br>" +
 "You will receive an amount of "+"<var>"+interest +"</var>"+"<br>" +
 "in the year " +"<var>"+dueYear+"</var>");

}

function checkprincipal()
{
 var principalcheck = parseFloat(document.getElementById("principal").value);

 if (principalcheck <= 0 )
 {alert("Enter a positive number!");
 document.getElementById("principal").focus();
 }

}

function slider()
{
    var slider = parseFloat(document.getElementById("rate").value);
    document.getElementById("rateview").innerHTML = (slider+"%");
}

