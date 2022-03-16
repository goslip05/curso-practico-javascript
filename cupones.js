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

const coupons = [
    "Diego_es_Jimenez",
    "Pero_no_le_digas_ha nadie",
    "Es_un_secreto"
];

function onClickButtonPriceDescuento(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon")
    const couponValue = inputCoupon.value;

    let descuento;

    switch (couponValue){
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 30;
        break;
        case coupons[2]:
            descuento = 25;
        break;
    }

    const preciocondescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + preciocondescuento;
}



