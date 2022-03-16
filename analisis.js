const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColsorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;

    }   
);

function esPar(numerito){
    return (numerito %2 ===0);
}

function calcularMedianaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado= 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;

        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];
        const mediana= calcularMedianaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;


    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGerenalCol = medianaSalarios(salariosColsorted);


 const spliceStart =(salariosColsorted.length * 90)/ 100;
 const spliceCount =salariosColsorted.length - spliceStart;
const salariosColTop10 = salariosColsorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGerenalCol, 
    medianaTop10Col,
});
