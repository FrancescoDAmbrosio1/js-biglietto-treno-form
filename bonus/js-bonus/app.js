const kmInputElement = document.getElementById('km')    //object | null
const userAgeElement = document.getElementById('userAge')   //object | null
const buttonElement = document.getElementById('submit')     //object | null
const bigliettoElement = document.getElementById('biglietto')   //object
buttonElement.addEventListener('click', function(){
   const km = parseFloat(kmInputElement.value)  //number
   const age = parseFloat(userAgeElement.value) //number
   let price = km * 0.21   //number
   if (age < 18){
        const discount20 = price * 0.20 //number
        let discountPrice = price - discount20 //number
        bigliettoElement.innerHTML = `<div>Il costo del biglietto è di ${discountPrice.toFixed(2)} &#8364 al quale è stato applicato uno sconto del 20% </div>`
   } else if (age > 65){
    const discount20 = price * 0.20 //number
    let discountPrice = price - discount20 //number
    bigliettoElement.innerHTML = `<div>Il costo del biglietto è di ${discountPrice.toFixed(2)} &#8364 al quale è stato applicato uno sconto del 40% </div>`

   } else {
    bigliettoElement.innerHTML = `<div>Il costo del biglietto è di ${price.toFixed(2)} &#8364 al quale non è stato applicato nessuno sconto</div>`

   }
})