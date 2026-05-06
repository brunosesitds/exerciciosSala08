function mostrar(){
    var texto = document.getElementById("i1").value;
    var cor = document.getElementById("i2").value;
    var data = document.getElementById("i3").value; 
    var check = document.getElementById("i4").checked;

    var printTexto = document.getElementById("printTexto") ;
    var printCor = document.getElementById("printCor") ;
    var printData = document.getElementById("printData") ; 
    var printCheck = document.getElementById("printCheck") ; 


    printTexto.textContent = "O texto digitado foi: " + texto;

    printCor.innerHTML = `cor digitada foi: ${cor}`;
    
    printData.innerHTML = `a data digitada foi: ${data}`;

    printCheck.innerHTML = `Você escolheu: ${check}`;

    
}