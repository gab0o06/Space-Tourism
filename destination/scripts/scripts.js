const menu = document.getElementById("menu-icon");
const nav = document.getElementById("menu-start");
const closemenu = document.getElementById("close-icon");

menu.addEventListener("click", () => {
  nav.classList.replace("navbar__list-background", "menu-start");
});

closemenu.addEventListener("click", () => {
  nav.classList.replace("menu-start", "navbar__list-background");
});

const datos = async () => {
  const fragment = document.createDocumentFragment();
  const div = document.getElementById("main__container");
  const response = await fetch("../scripts/data.json");
  const data = await response.json();
  if ("moon" === self.location.pathname.split("/")[3]) {
    const image = document.createElement("img");
    image.setAttribute("src", data.destinations[0].images.webp);
    image.setAttribute("alt", data.destinations[0].name);
    image.classList.add("main__moon-image");
    const div_information = document.createElement("div");
    div_information.classList.add("main__information");
    const ul = document.createElement("ul");
    ul.classList.add("main__list");
    for (let i = 0; i < 4; i++) {
      const li = document.createElement("li");
      if (data.destinations[i].name.toUpperCase() === "MOON") {
        li.innerHTML = `<a class="main__link" href="">${data.destinations[
          i
        ].name.toUpperCase()}</a>`;
        li.classList.add("main__list-item", "main__list-active");
        ul.appendChild(li);
      } else {
        li.innerHTML = `<a class="main__link" href="${
          data.destinations[i].rutes
        }">${data.destinations[i].name.toUpperCase()}</a>`;
        li.classList.add("main__list-item");
        ul.appendChild(li);
      }
    }
    const h1 = document.createElement("h1");
    h1.textContent = data.destinations[0].name.toUpperCase();
    h1.classList.add("main__planet-name");
    const p = document.createElement("p");
    p.textContent = data.destinations[0].description;
    p.classList.add("main__planet-desc");
    const div3 = document.createElement("div");
    div3.classList.add("main__container-data");
    const div4 = document.createElement("div");
    const h6 = document.createElement("h6");
    h6.textContent = "AVG. DISTANCE";
    h6.classList.add("main__data-title");
    const h5 = document.createElement("h5");
    h5.textContent = data.destinations[0].distance.toUpperCase();
    h5.classList.add("main__data-desc");
    div4.append(h6, h5);
    const div5 = document.createElement("div");
    div5.classList.add("main__subdata-container");
    const h6_second = document.createElement("h6");
    h6_second.textContent = `EST. TRAVEL TIME`;
    h6_second.classList.add("main__data-title");
    const h5_second = document.createElement("h5");
    h5_second.textContent = data.destinations[0].travel.toUpperCase();
    h5_second.classList.add("main__data-desc");
    div5.append(h6_second, h5_second);
    div3.append(div4, div5);
    div_information.append(ul, h1, p, div3);
    fragment.append(image, div_information);
    div.appendChild(fragment);
  } else if ("mars" === self.location.pathname.split("/")[3]) {
    const image = document.createElement("img");
    image.setAttribute("src", data.destinations[1].images.webp);
    image.setAttribute("alt", data.destinations[1].name);
    image.classList.add("main__moon-image");
    const div_information = document.createElement("div");
    div_information.classList.add("main__information");
    const ul = document.createElement("ul");
    ul.classList.add("main__list");
    const li_moon = document.createElement("li");
    li_moon.innerHTML = `<a class="main__link" href="${
      data.destinations[0].rutes
    }">${data.destinations[0].name.toUpperCase()}</a>`;
    li_moon.classList.add("main__list-item");
    ul.appendChild(li_moon);
    for (let i = 1; i < 4; i++) {
      const li = document.createElement("li");
      if (data.destinations[i].name.toUpperCase() === "MARS") {
        li.innerHTML = `<a class="main__link" href="">${data.destinations[
          i
        ].name.toUpperCase()}</a>`;
        li.classList.add("main__list-item", "main__list-active");
        ul.appendChild(li);
      } else {
        li.innerHTML = `<a class="main__link" href="${
          data.destinations[i].rutes
        }">${data.destinations[i].name.toUpperCase()}</a>`;
        li.classList.add("main__list-item");
        ul.appendChild(li);
      }
    }
    const h1 = document.createElement("h1");
    h1.textContent = data.destinations[1].name.toUpperCase();
    h1.classList.add("main__planet-name");
    const p = document.createElement("p");
    p.textContent = data.destinations[1].description;
    p.classList.add("main__planet-desc");
    const div3 = document.createElement("div");
    div3.classList.add("main__container-data");
    const div4 = document.createElement("div");
    const h6 = document.createElement("h6");
    h6.textContent = "AVG. DISTANCE";
    h6.classList.add("main__data-title");
    const h5 = document.createElement("h5");
    h5.textContent = data.destinations[1].distance.toUpperCase();
    h5.classList.add("main__data-desc");
    div4.append(h6, h5);
    const div5 = document.createElement("div");
    div5.classList.add("main__subdata-container");
    const h6_second = document.createElement("h6");
    h6_second.textContent = `EST. TRAVEL TIME`;
    h6_second.classList.add("main__data-title");
    const h5_second = document.createElement("h5");
    h5_second.textContent = data.destinations[1].travel.toUpperCase();
    h5_second.classList.add("main__data-desc");
    div5.append(h6_second, h5_second);
    div3.append(div4, div5);
    div_information.append(ul, h1, p, div3);
    fragment.append(image, div_information);
    div.appendChild(fragment);
  } else if("europa" === self.location.pathname.split("/")[3]){
    const image = document.createElement("img");
    image.setAttribute("src", data.destinations[2].images.webp);
    image.setAttribute("alt", data.destinations[2].name);
    image.classList.add("main__moon-image");
    const div_information = document.createElement("div");
    div_information.classList.add("main__information");
    const ul = document.createElement("ul");
    ul.classList.add("main__list");
    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      if (data.destinations[i].name.toUpperCase() === "EUROPA") {
        li.innerHTML = `<a class="main__link" href="">${data.destinations[
          i
        ].name.toUpperCase()}</a>`;
        li.classList.add("main__list-item", "main__list-active");
        ul.appendChild(li);
      } else {
        li.innerHTML = `<a class="main__link" href="${
          data.destinations[i].rutes
        }">${data.destinations[i].name.toUpperCase()}</a>`;
        li.classList.add("main__list-item");
        ul.appendChild(li);
      }
    }
    const li_titan = document.createElement("li");
    li_titan.innerHTML = `<a class="main__link" href="${
      data.destinations[3].rutes
    }">${data.destinations[3].name.toUpperCase()}</a>`;
    li_titan.classList.add("main__list-item");
    ul.appendChild(li_titan);
    const h1 = document.createElement("h1");
    h1.textContent = data.destinations[2].name.toUpperCase();
    h1.classList.add("main__planet-name");
    const p = document.createElement("p");
    p.textContent = data.destinations[2].description;
    p.classList.add("main__planet-desc");
    const div3 = document.createElement("div");
    div3.classList.add("main__container-data");
    const div4 = document.createElement("div");
    const h6 = document.createElement("h6");
    h6.textContent = "AVG. DISTANCE";
    h6.classList.add("main__data-title");
    const h5 = document.createElement("h5");
    h5.textContent = data.destinations[2].distance.toUpperCase();
    h5.classList.add("main__data-desc");
    div4.append(h6, h5);
    const div5 = document.createElement("div");
    div5.classList.add("main__subdata-container");
    const h6_second = document.createElement("h6");
    h6_second.textContent = `EST. TRAVEL TIME`;
    h6_second.classList.add("main__data-title");
    const h5_second = document.createElement("h5");
    h5_second.textContent = data.destinations[2].travel.toUpperCase();
    h5_second.classList.add("main__data-desc");
    div5.append(h6_second, h5_second);
    div3.append(div4, div5);
    div_information.append(ul, h1, p, div3);
    fragment.append(image, div_information);
    div.appendChild(fragment);
  } else if("titan" === self.location.pathname.split("/")[3]){
    const image = document.createElement("img");
    image.setAttribute("src", data.destinations[3].images.webp);
    image.setAttribute("alt", data.destinations[3].name);
    image.classList.add("main__moon-image");
    const div_information = document.createElement("div");
    div_information.classList.add("main__information");
    const ul = document.createElement("ul");
    ul.classList.add("main__list");
    for (let i = 0; i < 4; i++) {
      const li = document.createElement("li");
      if (data.destinations[i].name.toUpperCase() === "TITAN") {
        li.innerHTML = `<a class="main__link" href="">${data.destinations[
          i
        ].name.toUpperCase()}</a>`;
        li.classList.add("main__list-item", "main__list-active");
        ul.appendChild(li);
      } else {
        li.innerHTML = `<a class="main__link" href="${
          data.destinations[i].rutes
        }">${data.destinations[i].name.toUpperCase()}</a>`;
        li.classList.add("main__list-item");
        ul.appendChild(li);
      }
    }
    const h1 = document.createElement("h1");
    h1.textContent = data.destinations[3].name.toUpperCase();
    h1.classList.add("main__planet-name");
    const p = document.createElement("p");
    p.textContent = data.destinations[3].description;
    p.classList.add("main__planet-desc");
    const div3 = document.createElement("div");
    div3.classList.add("main__container-data");
    const div4 = document.createElement("div");
    const h6 = document.createElement("h6");
    h6.textContent = "AVG. DISTANCE";
    h6.classList.add("main__data-title");
    const h5 = document.createElement("h5");
    h5.textContent = data.destinations[3].distance.toUpperCase();
    h5.classList.add("main__data-desc");
    div4.append(h6, h5);
    const div5 = document.createElement("div");
    div5.classList.add("main__subdata-container");
    const h6_second = document.createElement("h6");
    h6_second.textContent = `EST. TRAVEL TIME`;
    h6_second.classList.add("main__data-title");
    const h5_second = document.createElement("h5");
    h5_second.textContent = data.destinations[3].travel.toUpperCase();
    h5_second.classList.add("main__data-desc");
    div5.append(h6_second, h5_second);
    div3.append(div4, div5);
    div_information.append(ul, h1, p, div3);
    fragment.append(image, div_information);
    div.appendChild(fragment);
  }
};

datos();

// <img class="main__moon-image" src="./img/image-moon.webp" alt="luna">
// <div class="main__information" id="main__info">
//   <ul class="main__list">
//     <li class="main__list-item main__list-active"> <a class="main__link" href="">MOON</a></li>
//     <li class="main__list-item"> <a class="main__link" href="">MARS</a></li>
//     <li class="main__list-item"> <a class="main__link" href="">EUROPA</a></li>
//     <li class="main__list-item"> <a class="main__link" href="">TITAN</a></li>
//   </ul>
//   <h1 class="main__planet-name">MOON</h1>
//   <p class="main__planet-desc">See our planet as you’ve never seen it before. A perfect relaxing trip away to help
//     regain perspective and
//     come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing
//     sites.</p>
//   <div class="main__container-data">
//     <div>
//       <h6 class="main__data-title">AVG. DISTANCE</h6>
//       <h5 class="main__data-desc">384,400 KM</h5>
//     </div>
//     <div class="main__subdata-container">
//       <h6 class="main__data-title">EST. TRAVEL TIME</h6>
//       <h5 class="main__data-desc">3 DAYS</h5>
//     </div>
//   </div>
// </div>
