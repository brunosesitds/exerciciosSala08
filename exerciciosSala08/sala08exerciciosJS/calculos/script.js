function somar(){
    var n1 = document.getElementById("n1").valueAsNumber
    var n2 = document.getElementById("n2").valueAsNumber 
    var resp = document.getElementById("resposta")
    resp.textContent = n1 + n2
}

function sub(){
    var n3 = document.getElementById("n3").valueAsNumber
    var n4 = document.getElementById("n4").valueAsNumber 
    var resp = document.getElementById("respSub")
    resp.textContent = n3 - n4
}

function multi(){
    var n3 = document.getElementById("n5").valueAsNumber
    var n4 = document.getElementById("n6").valueAsNumber 
    var resp = document.getElementById("respMulti")
    resp.textContent = n3 * n4
}

function div(){
    var n3 = parseFloat(document.getElementById("n7").value)
    var n4 = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("respDiv")
    if(n4 !== 0){
        resp.textContent = n3 / n4
    }else{
        resp.textContent = "Não se divide por 0"
    }
}



