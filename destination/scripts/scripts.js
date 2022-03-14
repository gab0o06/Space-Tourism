const menu = document.getElementById("menu-icon");
const nav = document.getElementById("menu-start");
const closemenu = document.getElementById("close-icon");


menu.addEventListener("click", () => {
  nav.classList.replace("navbar__list-background", "menu-start");
});

closemenu.addEventListener("click", () => {
  nav.classList.replace("menu-start", "navbar__list-background");
});


const fragment = document.createDocumentFragment();
const div = document.getElementById("main__info")

const datos = async () => {
  const response = await fetch("../scripts/data.json");
  const data = await response.json();
  console.table(data.destinations);
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const h5first = document.createElement("h5")
  const h5second = document.createElement("h5")
  const ul = document.createElement("ul");
  for(let i = 0; i < data.destinations.length; i++){
    const li = document.createElement("li");
    li.innerHTML = `<a href="">${data.destinations[i].name}</a>`;
    ul.appendChild(li);
  }
  h1.textContent = data.destinations[0].name;
  p.textContent = data.destinations[0].description;
  h5first.textContent = data.destinations[0].distance;
  h5second.textContent = data.destinations[0].travel;
  fragment.append(ul, h1, p, h5first, h5second);
  console.dir(fragment)
  // div.appendChild(fragment);
};

datos();