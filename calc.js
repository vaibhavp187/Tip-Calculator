var btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    var bill = document.getElementById("bill").value;
    var tip = document.getElementById("tip").value;

    var tamt = document.getElementById("tamt").value = bill * (tip/100);
    document.getElementById("total").value = parseFloat(bill) + parseFloat(tamt); 

})