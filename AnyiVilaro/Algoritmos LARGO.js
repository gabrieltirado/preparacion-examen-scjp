var nroEncuestados = prompt("Número de encuestados");
var edad = 0;
var peso = 0;
var estatura = 0;
var boys = 0;
var jovenes = 0;
var adultos = 0;
var viejos = 0;
var pesoBajo = 0;
var pesoNormal = 0;
var pesoSuperior = 0;
var obesidad = 0;
var masaCorporal = 0;
var sumaMasaCorporal = 0;
var contadorEdadNegativa = 0;
var contadorPesoNegativo = 0;

for(var i=1;i<=nroEncuestados;i++){
    edad = prompt("Edad\nEncuestado: " + i + ". Ingresar Edad: ", 0);
    if(edad < 0 ){
        contadorEdadNegativa++;
    }
    peso = prompt("Peso\nEncuestado: " + i + ". Ingresar Peso en Kg: ", 0);
    if(peso < 0 ){
        contadorPesoNegativo++;
    }
    estatura = prompt("Estatura\nEncuestado: " + i + ". Ingresar Estatura en Metros: ", 0);

    console.log(obtenerCategoria(edad));
    console.log(obtenerIMC(peso, estatura));
    masaCorporal = obtenerIMC(peso, estatura);
    sumaMasaCorporal = sumaMasaCorporal + masaCorporal;

    if (masaCorporal < 18.5) {
        pesoBajo++;
    }else if (masaCorporal >= 18.5 && masaCorporal <= 24.9) {
        pesoNormal++;
    }else if (masaCorporal >= 25 && masaCorporal <= 29.9) {
        pesoSuperior++;
    }else if (masaCorporal >= 30) {
        obesidad++;
    }
}

console.log("Cantidad de encuestados.: " + nroEncuestados );
console.log("Cantidad intentos errados al ingresar edades negativas.: " + contadorEdadNegativa );
console.log("Cantidad de intentos errados al ingresar pesos negativos.: " + contadorPesoNegativo );
console.log("Cantidad de niños.: " + boys );
console.log("Cantidad de Jóvenes.: " + jovenes );
console.log("Cantidad de Adultos.: " + adultos );
console.log("Cantidad de Viejos.: " + viejos );
console.log("Porcentaje de niños.: " + (boys / nroEncuestados)*100 );
console.log("Porcentaje de Jóvenes.: " + (jovenes / nroEncuestados)*100 );
console.log("Porcentaje de Adultos.: " + (adultos / nroEncuestados)*100 );
console.log("Porcentaje de Viejos.: " + (viejos / nroEncuestados)*100 );
console.log("Cantidad personas con peso bajo.: " + pesoBajo );
console.log("Cantidad personas con peso normal.: " + pesoNormal );
console.log("Cantidad personas con peso superior a los normal.: " + pesoSuperior );
console.log("Cantidad personas con obesidad.: " + obesidad );
console.log("Porcentaje de personas peso bajo.: " + (pesoBajo / nroEncuestados)*100 );
console.log("Porcentaje de personas con peso normal: " + (pesoNormal / nroEncuestados)*100 );
console.log("Porcentaje de personas con peso superior: " + (pesoSuperior / nroEncuestados)*100 );
console.log("Porcentaje de personas con obesidad: " + (obesidad / nroEncuestados)*100 );
console.log("Promedio de IMC de la población: " + (sumaMasaCorporal/nroEncuestados) );


function obtenerCategoria(edad) {
    var categoria = "";
    if(edad >= 0 && edad <= 13){
        categoria = "Niños";
        boys++;
    }

    if(edad >= 14 && edad <= 30){
        categoria = "Jovenes";
        jovenes++;
    }

    if(edad >= 31 && edad <= 60){
        categoria = "Adultos";
        adultos++;
    }

    if(edad >= 61){
        categoria = "Viejos";
        viejos++;
    }
    
    return categoria;
}

function obtenerIMC(peso, estatura) {
    var imc = peso / estatura^2;
    return imc;
}