const kmInputElement = document.getElementById('km')    //object | null
const userAgeElement = document.getElementById('userAge') //object | null
const formElement = document.getElementById('form-submit')    //object | null
const bigliettoElement = document.getElementById('biglietto')

console.log(typeof(userAgeElement))

formElement.addEventListener('submit', function(event) {
   event.preventDefault() 
   const km = parseFloat(kmInputElement.value)//number
   const age = userAgeElement.value;
   let price = km * 0.21   //number
   if (age === '1'){
        const discount20 = price * 0.20 //number
        let discountPrice = price - discount20 //number
        bigliettoElement.innerHTML = `
               <div class="card p-3 bg-primary-subtle">
                  <table class="table table table-bordered">
                     <thead>
                        <tr>
                           <th scope="col">Km percorsi</th>
                           <th scope="col">Prezzo base</th>
                           <th scope="col">Sconto applicato</th>
                           <th scope="col">Prezzo Finale</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <td> ${km} km </td>
                           <td> ${price.toFixed(2)} &#8364</td>
                           <td>20%</td>
                           <td> ${discountPrice.toFixed(2)} &#8364 </td>
                        </tr>
                     </tbody>
                  </table>
               </div>`
   } else if (age === '2'){
    const discount40 = price * 0.40 //number
    let discountPrice = price - discount40 //number
    bigliettoElement.innerHTML = `<div class="col">
    <div class="card p-3 bg-primary-subtle">
       <table class="table table table-bordered">
          <thead>
             <tr>
                <th scope="col">Km percorsi</th>
                <th scope="col">Prezzo base</th>
                <th scope="col">Sconto applicato</th>
                <th scope="col">Prezzo Finale</th>
             </tr>
          </thead>
          <tbody>
             <tr>
                <td> ${km} km </td>
                <td> ${price.toFixed(2)} &#8364</td>
                <td>40%</td>
                <td> ${discountPrice.toFixed(2)} &#8364 </td>
             </tr>
          </tbody>
       </table>
    </div>
 </div>`
   } else {
    bigliettoElement.innerHTML = `<div class="col">
    <div class="card p-3 bg-primary-subtle">
       <table class="table table table-bordered">
          <thead>
             <tr>
                <th scope="col">Km percorsi</th>
                <th scope="col">Prezzo base</th>
                <th scope="col">Sconto applicato</th>
                <th scope="col">Prezzo Finale</th>
             </tr>
          </thead>
          <tbody>
             <tr>
                <td> ${km} km </td>
                <td> ${price.toFixed(2)} &#8364</td>
                <td>Nessuno sconto</td>
                <td> ${price.toFixed(2)} &#8364 </td>
             </tr>
          </tbody>
       </table>
    </div>
 </div>`
   }
})