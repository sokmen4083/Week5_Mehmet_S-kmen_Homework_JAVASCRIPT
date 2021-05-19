function year1(){
    document.getElementById("year1").innerHTML = 
    document.getElementById("finish1").value - document.getElementById("start1").value;
    document.getElementById("year1").style.backgroundColor = 'yellow'
    document.getElementById("year1").style.fontSize = '40px'
    document.getElementById("year1").style.textAlign = 'center'
    document.getElementById("total-year").innerHTML = 
    document.getElementById("finish1").value - document.getElementById("start1").value;
    document.getElementById("total-year").style.backgroundColor = 'yellow'
    document.getElementById("total-year").style.fontSize = '40px'
    document.getElementById("total-year").style.textAlign = 'center'
}
function year2(){
    document.getElementById("year2").innerHTML = 
    document.getElementById("finish2").value - document.getElementById("start2").value;
    document.getElementById("year2").style.backgroundColor = 'yellow'
    document.getElementById("year2").style.fontSize = '40px'
    document.getElementById("year2").style.textAlign = 'center'
    document.getElementById("total-year").innerHTML = 
    (document.getElementById("finish1").value - document.getElementById("start1").value) 
    +
    (document.getElementById("finish2").value - document.getElementById("start2").value);
    
}
function year3(){
    document.getElementById("year3").innerHTML = 
    document.getElementById("finish3").value - document.getElementById("start3").value;
    document.getElementById("year3").style.backgroundColor = 'yellow'
    document.getElementById("year3").style.fontSize = '40px'
    document.getElementById("year3").style.textAlign = 'center'
    document.getElementById("total-year").innerHTML = 
    (document.getElementById("finish1").value - document.getElementById("start1").value) 
    +
    (document.getElementById("finish2").value - document.getElementById("start2").value)
    +
    (document.getElementById("finish3").value - document.getElementById("start3").value)
}
function year4(){
    document.getElementById("year4").innerHTML = 
    document.getElementById("finish4").value - document.getElementById("start4").value;
    document.getElementById("year4").style.backgroundColor = 'yellow'
    document.getElementById("year4").style.fontSize = '40px'
    document.getElementById("year4").style.textAlign = 'center'
    document.getElementById("total-year").innerHTML = 
    (document.getElementById("finish1").value - document.getElementById("start1").value) 
    +
    (document.getElementById("finish2").value - document.getElementById("start2").value)
    +
    (document.getElementById("finish3").value - document.getElementById("start3").value)
    +
    (document.getElementById("finish4").value - document.getElementById("start4").value)
}

