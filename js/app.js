
const phoneDetail = document.getElementById('phone-detail');
const errorText = document.getElementById('error');

const searchPhone = () =>{
    const inputValue = document.getElementById('input-value');
    const inputText = inputValue.value
    inputValue.value = ''

    // if(isNaN(inputText) || inputText === ''){
    //     errorText.innerHTML = 'Productis Not Available !!! '
    // }

     // AllPhone name API Calling 
     fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
     .then(res => res.json())
     .then(data => displayPhones(data.data))
     phoneDetail.innerHTML = ''
    
}
const displayPhones = (phones) =>{
    const searchResult = document.getElementById("search-result");
    const fast20Data = phones.slice(0,20);
    searchResult.innerHTML = ''
    
    fast20Data.forEach(phone =>{
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="col my-3 ">
            <div class="card border-0" style="width: 18rem;">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Name: ${phone.phone_name}</h5>
              <h6 class="card-text">Brand: ${phone.brand}</h6>
              <button onclick="phoneDetails('${phone.slug}')" class="btn btn-primary">Details</button>
            </div>
          </div>
            </div>`;
        searchResult.appendChild(div)
    })
}
    // Phone ID API Calling 
const phoneDetails = (phoneId) =>{
    
    fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
 
}

    // Showing The Phone Information 
const displayPhone = (mobil) =>{
    const div = document.createElement('div')
    phoneDetail.innerHTML = ''
    div.innerHTML=`
        <div class="card mb-3 m-auto border-0 shadow-lg mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center w-50 mx-auto">
            <img class = "align-items-center mt-4" src="${mobil.image}" class="img-fluid  rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body ps-5">
              <h5 class="card-title">${mobil.name}</h5>
              <p class="card-text mb-1"><span class ="fw-bold">ReleaseDate : </span>${mobil.releaseDate? mobil.releaseDate :'No release date found'} </p>
                <p class="mb-1"><span class="fw-bold">MainFeatures</span></p>
                <p class="mb-1"><span class ="fw-bold">Display : </span>${mobil.mainFeatures.displaySize}</p>
                <p class="mb-1"><span class ="fw-bold">Storage : </span>${mobil.mainFeatures.storage}</p>
                <p class="mb-1"><span class ="fw-bold">ChipSet : </span>${mobil.mainFeatures.chipSet}</p>
                <p class="mb-1"><span class ="fw-bold">Memory : </span>${mobil.mainFeatures.memory}</p>
                <p class="mb-1"><span class="fw-bold">Others</span></p>
                <p class="mb-1"><span class="fw-bold">Bluetooth</span>:${mobil.others.Bluetooth}</p> 
                <p class="mb-1"><span class="fw-bold">GPS: </span> ${mobil.others.GPS}</p> 
                <p class="mb-1"><span class="fw-bold">NFC: </span> ${mobil.others.NFC}</p> 
                <p class="mb-1"><span class="fw-bold">Radio: </span> ${mobil.others.Radio}</p> 
                <p class="mb-1"><span class="fw-bold">USB: </span> ${mobil.others.USB}</p> 
                <p class="mb-1"><span class="fw-bold">WLAN: </span> ${mobil.others.WLAN}</p> 
            </div>
          </div>
        </div>
      </div>
        `;
    phoneDetail.appendChild(div)
}