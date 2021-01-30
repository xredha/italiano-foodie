import {favorites, sliders} from "./all-data.js";

const maSidenav = document.querySelectorAll('.sidenav');
const maSlider = document.querySelectorAll('.slider');
const sSlides = document.querySelector('custom-slider .slides');
const sPopularRow = document.querySelector('custom-popular .row');
const sList = document.getElementById('dehaze');
const sCard = document.getElementById('apps');
const sLinkPop = document.querySelectorAll('.link-popular');
const sLinkCon = document.querySelectorAll('.link-contact');
const sCSlider = document.querySelector('custom-slider');
const sCWelcome = document.querySelector('custom-welcome');
const sCPopular = document.querySelector('custom-popular');
const sCContact = document.querySelector('custom-contact');

function showSlider() {
  sSlides.innerHTML = "";

  sliders.forEach(slider => {
    const {img,title,desc} = slider;

    const listElement = document.createElement("li");

    let center = "center";
    if (img == 2) {
      center = "left";
    } else if (img == 4) {
      center = "right";
    }

    listElement.innerHTML = 
    `
      <img src= "${img}">
      <div class = "caption ${center}-align">
        <h3>${title}</h3>
        <h5 class="light grey-text text-lighten-3">${desc}</h5>
      </div>
    `;
    // console.log(listElement);
    sSlides.appendChild(listElement);
  });
}

function showPopular(param1, param2) {
  const meals = [52844,52811,52866,52770,52823,52838,52796,52777,53014,52982];
  meals.forEach(meal => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      if(responseJson.meals) {
        const inMeals = responseJson.meals[0];
        // console.log(responseJson.meals[0]);

        const divElement = document.createElement("div");
        divElement.classList.add("col",param1,param2);

        if (divElement.classList.contains("m4")) {
          divElement.innerHTML = 
          `
            <div class="card">
            <div class="card-image">
              <img src="${inMeals.strMealThumb}">
            </div>
            <div class="card-content">
              <h6><b>Meal Name :</b></h6>
              <p>${inMeals.strMeal}</p>
              <h6><b>Meal Category :</b></h6>
              <p>${inMeals.strCategory}</p>
            </div>
            <div class="card-action">
              <a href="${inMeals.strYoutube}" target="__blank">Link Youtube</a>
            </div>
            </div>
          `;
        } else {
          divElement.innerHTML = 
          `
            <div class="card horizontal">
              <div class="card-image">
                <img src="${inMeals.strMealThumb}">
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <h6><b>Meal Name :</b></h6>
                  <p>${inMeals.strMeal}</p>
                  <h6><b>Meal Category :</b></h6>
                  <p>${inMeals.strCategory}</p>
                </div>
                <div class="card-action">
                  <a href="${inMeals.strYoutube}" target="__blank">Link Youtube</a>
                </div>
              </div>
            </div>
          `;
        }
        // console.log(divElement);
        sPopularRow.appendChild(divElement);
      } else {
        alert("Data gagal dimuat!!!");
      }
    })
  });
}

function destroyPopularMenu() {
  const sPopularCol = document.querySelectorAll('custom-popular .col');
  sPopularCol.forEach(e => {
    e.remove();
  });
}

document.addEventListener('load', showSlider());
document.addEventListener('load', showPopular("s6","m4"));
sList.addEventListener('click', () => {
  destroyPopularMenu();
  showPopular("s12");
});
sCard.addEventListener('click', () => {
  destroyPopularMenu();
  showPopular("s6","m4");
});
sLinkPop.forEach(link => {
  link.addEventListener('click', () => {
    sCSlider.classList.remove("hidden");
    sCWelcome.classList.remove("hidden");
    sCPopular.classList.remove("hidden");
    sCContact.classList.add("hidden");
  });
});
sLinkCon.forEach(link => {
  link.addEventListener('click', () => {
    sCSlider.classList.add("hidden");
    sCWelcome.classList.add("hidden");
    sCPopular.classList.add("hidden");
    sCContact.classList.remove("hidden");
  });
});

// Materialize function

M.Sidenav.init(maSidenav);
M.Slider.init(maSlider, {
  indicators : false,
  height : 550,
  interval : 3000
});

// export default main;