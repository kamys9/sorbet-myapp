// FRONT END FILE TO INTERACT WITH THE DOM
let searchBtn = document.getElementById('searchbutton');
const mainContainer = document.querySelector('.search-cont')
const searchButton = document.querySelector('.search-btn')
const input = document.querySelector('.search-bar')


// BTN Search event

searchBtn.addEventListener('click', function() {
    
    alert('hello');
});
    //     function send() {
    //         console.log(tareaInput.value);
    //     }
    
    //     send();
    //     alert('hello');
    // });


    // ______________________________________________________________________________
    // API fetch working

//     var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer Taw27g6kg2ob92DthUUJYaoaS4xMUTHGAdy6vGlMWSRvoNBbqh7R45kup9j_cNqqjwAX5pDaXLiDpauQ-npqoAs19ONVZuPYhRRS2xbzizQNZwLWZC4ecjD1fLrHYHYx");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Brussels&term=glacier", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
  // end API fetch working________________________________________________________________

      var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Taw27g6kg2ob92DthUUJYaoaS4xMUTHGAdy6vGlMWSRvoNBbqh7R45kup9j_cNqqjwAX5pDaXLiDpauQ-npqoAs19ONVZuPYhRRS2xbzizQNZwLWZC4ecjD1fLrHYHYx");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const Search = (icecream) => {
    mainContainer.innerHTML = ""

    
fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Brussels&term=glacier", requestOptions)
  .then(response => response.json())
  // .then(result => console.log(result))
  .then((result) => {
    
        result.businesses.forEach((business) => {
          const img = `<div class="main-div">
              <img src="${result.businesses[0,1,2].image_url}" alt="">
              <h3>${result.businesses[0,1,2].name}</h3>
              <h4>${result.businesses[0,1,2].location.address1}</h4>
            </div>`
            console.log(result);
            mainContainer.insertAdjacentHTML('beforeend', img)
        })
      })
  .catch(error => console.log('error', error));
 
// _______
// const mainContainer = document.querySelector('.search-cont')
// const searchButton = document.querySelector('.search-btn')
// const input = document.querySelector('.search-bar')


// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer Taw27g6kg2ob92DthUUJYaoaS4xMUTHGAdy6vGlMWSRvoNBbqh7R45kup9j_cNqqjwAX5pDaXLiDpauQ-npqoAs19ONVZuPYhRRS2xbzizQNZwLWZC4ecjD1fLrHYHYx");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// const Search = (icecream) => {
//   mainContainer.innerHTML = ""

//   fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Brussels&term=glacier+${input.value}`, requestOptions)
//     .then(response => response.json())

//     .then((data) => {
    
//     data.businesses.forEach((business) => {
//       const img = `<div class="main-div">
//           <img src="${data.image_url}" alt="">
//           <h3>${business.name}</h3>
//           <h4>${business.keyname}</h4>
//         </div>`
//         console.log(data);
//         mainContainer.insertAdjacentHTML('beforeend', img)
//     })

//     .catch(function(response) {
//       // FAILURE RESPONSE
//       console.log('Error! Please try again');
//       input.value = ""

//   });
//   })
//  }
// _______
  }
searchButton.addEventListener('click', (event) => {
  console.log(input.value)
  Search(input.value)
}) 