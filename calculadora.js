var mem = 0;
var operacion = "";
var operando1 = 0;
var operando2 = 0;
var resultado = 0;

function del_button() {
	document.getElementById("screen").innerHTML=0;
	document.getElementById("operator").innerHTML="";
    operando1 = 0;
    operando2 = 0;
    operacion = "";
    resultado = 0;
}

function c_button() {
	document.getElementById("screen").innerHTML=0;
}

function mc_button() {
	document.getElementById("mem").innerHTML="";
	mem = 0;
}

function numeros(number) {
    if (operacion === "") {
        if  (document.getElementById("screen").innerHTML==0) {
	    document.getElementById("screen").innerHTML=number;
        } else {
	       var cifra = document.getElementById("screen").innerHTML;
	       document.getElementById("screen").innerHTML = cifra+number;
        }
    } else {
         document.getElementById("screen").innerHTML=number;
        operacion = ""
        } 
};

function coma () {
    var number = ".";
    if (operacion === "") {
        if  (document.getElementById("screen").innerHTML==0) {
        document.getElementById("screen").innerHTML=number;
        } else {
           var cifra = document.getElementById("screen").innerHTML;
           document.getElementById("screen").innerHTML = cifra+number;
        }
    } else {
         document.getElementById("screen").innerHTML=number;
        operacion = ""
        } 
}

function suma() {
    operacion = "suma";
    document.getElementById("operator").innerHTML ="+";
    
    if (resultado == 0){
    operando2 = document.getElementById("screen").innerHTML;
    operando1 = Number(operando1) + Number(operando2);
    document.getElementById("screen").innerHTML = operando1;
    document.getElementById("operator").innerHTML ="+";
    } else {
        operando1 = document.getElementById("screen").innerHTML;    
    }
}

function multiplicar() {
    operacion = "multiplicar";
    operando1 = document.getElementById("screen").innerHTML;
    document.getElementById("operator").innerHTML ="x";
}

function resta() {
    operacion = "resta";
    operando1 = document.getElementById("screen").innerHTML;
    document.getElementById("operator").innerHTML ="-";
}

function dividir() {
    operacion = "dividir";
    operando1 = document.getElementById("screen").innerHTML;
    document.getElementById("operator").innerHTML ="/";
}

function igual () {
    operacion = document.getElementById("operator").innerHTML;
    operando2 = document.getElementById("screen").innerHTML;
    
    if (operacion == "+") {
    resultado = Number(operando1) + Number(operando2);
    document.getElementById("screen").innerHTML = resultado;
    }  else if (operacion == "-") {
    resultado = Number(operando1) - Number(operando2);
    document.getElementById("screen").innerHTML = resultado;
    }  else if (operacion == "x") {
    resultado = Number(operando1) * Number(operando2);
    document.getElementById("screen").innerHTML = resultado;
    } else if (operacion == "/") {
    resultado = Number(operando1) / Number(operando2);
    document.getElementById("screen").innerHTML = resultado;
    }
}

function porcentaje () {
    operacion = document.getElementById("operator").innerHTML;
    operando2 = document.getElementById("screen").innerHTML;
    
    resultado = Number(operando1) * Number(operando2) / 100;
    document.getElementById("screen").innerHTML = resultado;
}

function memory () {
    mem = document.getElementById("screen").innerHTML;
    document.getElementById("mem").innerHTML = mem;   
}

function teclado (event){
    var letra = event.keyCode || event.which;
    //funciones
    if (letra ==13) {
        igual ();
    }
    if (letra == 107) {
        suma();
    }
    if (letra == 109) {
        resta();
    }
    if (letra == 106) {
        multiplicar();
    }
    if (letra == 111) {
        dividir();
    }
    if (letra == 46) {
        del_button();
    }
    //números
    if (letra == 96) {
        number = 0
        numeros(number);
    }
    if (letra == 97) {
        number = 1
        numeros(number);
    }
    if (letra == 98) {
        number = 2
        numeros(number);
    }
    if (letra == 99) {
        number = 3
        numeros(number);
    }
    if (letra == 100) {
        number = 4
        numeros(number);
    }
    if (letra == 101) {
        number = 5
        numeros(number);
    }
    if (letra == 102) {
        number = 6
        numeros(number);
    }
    if (letra == 103) {
        number = 7
        numeros(number);
    }
    if (letra == 104) {
        number = 8
        numeros(number);
    }
    if (letra == 105) {
        number = 9
        numeros(number);
    }

    //coma
    if (letra == 110) {
        coma();
    }
}


window.onkeydown= teclado;
