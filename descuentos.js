const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
   const porcentajePreciocondescuento = 100 - descuento;
   const preciocondescuento = (precio * porcentajePreciocondescuento)/ 100;
   return preciocondescuento;
}


//console.log("El precio original es: " + precioOriginal)
/*console.log({
    precioOriginal,
    descuento,
    porcentajePreciocondescuento,
    preciocondescuento,
})*/

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount")
    const discountValue = inputDiscount.value;

    const preciocondescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + preciocondescuento;
}