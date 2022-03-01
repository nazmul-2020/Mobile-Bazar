const searchPhone = () =>{
    const inputValue = document.getElementById('input-value').value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}
const displayPhones = (phones) =>{
    // console.log(phones)
    const searchResult = document.getElementById("search-result");
    const fast20Data = phones.slice(0,20);
    // console.log(fast20Data)
    fast20Data.forEach(phone =>{
        // console.log(phone)
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="col my-3 ">
            <div class="card" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">${phone.brand}</p>
              <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">Click Now</button>
            </div>
          </div>
            </div> `;
        searchResult.appendChild(div)
    })
}
const phoneDetails = (phoneId) =>{
    // console.log(phoneId)
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
    
}

const displayPhone = (mobil) =>{
    console.log(mobil)
}