
const phoneDetail = document.getElementById('phone-detail');
const searchPhone = () =>{
    const inputValue = document.getElementById('input-value');
    const inputText = inputValue.value
   
    inputValue.value = ''
     // Phone name API Calling 
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
    phoneDetail.innerHTML = ''
    // searchResult.innerHTML = ''
    
}
const displayPhones = (phones) =>{
    // console.log(phones)
    const searchResult = document.getElementById("search-result");
    const fast20Data = phones.slice(0,20);
    searchResult.innerHTML = ''
    // console.log(fast20Data)
    fast20Data.forEach(phone =>{
        console.log(phone)
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="col my-3 ">
            <div class="card border-0" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">${phone.brand}</p>
              <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">Details</button>
            </div>
          </div>
            </div>`;
        searchResult.appendChild(div)
    })
}
    // Phone ID API Calling 
const phoneDetails = (phoneId) =>{
    // console.log(phoneId)
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
    
    
}
    // Showing The Phone Information 
const displayPhone = (mobil) =>{
    console.log(mobil.mainFeatures.chipSet)
    const div = document.createElement('div')
    phoneDetail.innerHTML = ''
    div.innerHTML=`
        <div class="card mb-3 m-auto border-0 shadow-lg mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img class = "align-items-center h-75 mt-4" src="${mobil.image}" class="img-fluid  rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${mobil.name}</h5>
              <p class="card-text mb-1"><span class ="fw-bold">ReleaseDate : </span>${mobil.releaseDate}</p>
                <p class="mb-1"><span class ="fw-bold">Display : </span>${mobil.mainFeatures.displaySize}</p>
                <p class="mb-1"><span class ="fw-bold">Storage : </span>${mobil.mainFeatures.storage}</p>
                <p class="mb-1"><span class ="fw-bold">ChipSet : </span>${mobil.mainFeatures.chipSet}</p>
                <p class="mb-1"><span class ="fw-bold">Memory : </span>${mobil.mainFeatures.memory}</p>
            </div>
          </div>
        </div>
      </div>
        `;
    phoneDetail.appendChild(div)
}