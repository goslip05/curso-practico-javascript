function calcularMedianaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado= 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;

        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista10=[
    100,
    300,
    500,
    800,
    //4000000,
];


function calculoMediana(lista1){
    lista1.sort(function(a,b){
        return a-b;
    });
    const mitadLista1 = parseInt(lista1.length /2);
    function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(lista1);
//let mediana;
if (esPar(lista1.length)){
    const elemento1= lista1[mitadLista1 -1]; 
    const elemento2 = lista1[mitadLista1 ];
    const promedioElemento1y2 = calcularMedianaAritmetica([elemento1,elemento2]);
    return promedioElemento1y2;
}else {
    return lista1[mitadLista1];
}
}
