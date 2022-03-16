// codigo del cuadrado
console.group("Cuadrados");
//const ladocuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

function perimetrocuadrado(lado) {
    return lado * 4;
}
perimetrocuadrado()
//onsole.log("El perimetro del cuadrado es: " + perimetrocuadrado+ "cm");

//const areacuadrado = ladocuadrado * ladocuadrado;

function areacuadrado(lado){
    return lado *lado;
}
//console.log("El area del cuadrado es: " + areacuadrado+ "cm^2");
console.groupEnd();


// codigo del triangulo
console.group("Triangulos");
//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo = 4;

//console.log(
  //  "Los lados del triangulo miden: "
  //  + ladotriangulo1
  //  + "cm, "
   // + ladotriangulo2
  //  + "cm"
//);

////const alturatriangulo = 5.5;
//console.log("La altura del triangulo esd de: " + alturatriangulo+ "cm");

function perimetrotriangulo(lado,lado,base){
    return lado + lado + base;
}

//const perimetrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
//console.log("El perimetro del triangulo es: " + perimetrotriangulo+ "cm");

function areatriangulo(base,altura){
    return (base*altura) /2;
}
//const areatriangulo = (basetriangulo*alturatriangulo) / 2;
//console.log("El area del triangulo es: " + areatriangulo+ "cm^2");
console.groupEnd();


// codigo del circulo
console.group("Circulo");
//radio
//const radiocirculo = 4;
//console.log("El radios del circulo es: " + radiocirculo+ "cm");

//diametro
function diametrocirculo(radio){
    return radio *2;
}
//const diametrocirculo = radiocirculo * 2;
//console.log("El diametro del circulo es: " + diametrocirculo+ "cm");

//pi
const PI = Math.PI;
//console.log("El valor de PI es: " + PI);

//circunferencia
function perimetrocirculo(radio){
    const diametro = diametrocirculo(radio);
    return diametro*PI;
}
//const perimetrocirculo = diametrocirculo * PI;
//console.log("El perimetro del circulo es: " + perimetrocirculo+ "cm");

//area
function areacirculo (radio){
    return (radio * radio) *PI;
}
//const areacirculo = (radiocirculo * radiocirculo) *PI;
//console.log("El area del circulo es: " + areacirculo+ "cm^2");

console.groupEnd();

//aqui arranca el html

function calcularperimetrocuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;

    const perimetro = perimetrocuadrado(value);
    alert(perimetro);
}

function calcularareacuadrado(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;

    const area = areacuadrado(value);
    alert(area);
}

//html triangulo

function calcularperimetrotriangulo(){
    const input1 = document.getElementById("inputtriangulo");
    const value = Number(input1.value);

    const input2 = document.getElementById("inputtriangulo1");
    const value1 = Number(input2.value);

    const input3 = document.getElementById("inputtriangulo2");
    const value2 = Number(input3.value);

    const perimetro = perimetrotriangulo(value,value1,value2);
    alert(perimetro);
}

function calcularareatriangulo(){
    const input1 = document.getElementById("inputtriangulo");
    const value = Number(input1.value);

    const input2 = document.getElementById("inputtriangulo1");
    const value1 = Number(input2.value);

    const area = areatriangulo(value,value1);
    alert(area);
}

//html circulo

function calcularperimetrocirculo(){
    const input = document.getElementById("inputcirculo");
    const value = input.value;

    const perimetro = perimetrocirculo(value);
    alert(perimetro);
}

function calcularareacirculo(){
    const input = document.getElementById("inputcirculo");
    const value = input.value;

    const area = areacirculo(value);
    alert(area);
}