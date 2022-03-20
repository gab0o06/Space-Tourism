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
  const div_main = document.getElementById("main__container");
  const response = await fetch("../../scripts/data.json");
  const data = await response.json();
  if (self.location.pathname.endsWith("commander.html")) {
    const div_info = document.createElement("div");
    div_info.classList.add("main__container-info");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h2.classList.add("main__subtitle");
    h2.textContent = `${data.crew[0].role.toUpperCase()}`;
    h1.classList.add("main__title-name");
    h1.textContent = `${data.crew[0].name.toUpperCase()}`;
    p.classList.add("main__paragraph");
    p.textContent = `${data.crew[0].bio}`;
    console.log(data.crew[0].role);
    div.append(h2, h1, p);

    const div_flex = document.createElement("div");
    const ul = document.createElement("ul");
    ul.classList.add("main__list");
    for (let i = 0; i < data.crew.length; i++) {
      const a = document.createElement("a");
      a.innerHTML = `<li class=" main__list-item"></li>`;
      a.setAttribute("href", `${data.crew[i].rutes}`);
      if (data.crew[i].role.toLowerCase() === "commander") {
        a.innerHTML = `<li class="active-point main__list-item"></li>`;
        a.setAttribute("href", ``);
      }
      ul.appendChild(a);
    }

    const img = document.createElement("img");
    img.classList.add("main__image");
    img.setAttribute("src", `${data.crew[0].images.webp}`);
    img.setAttribute("alt", `Imagen de ${data.crew[0].name}`);

    div_flex.append(ul);
    div_info.append(div, div_flex);
    fragment.append(div_info, img);
    div_main.appendChild(fragment);
  } else if (self.location.pathname.endsWith("specialist.html")) {
    const div_info = document.createElement("div");
    div_info.classList.add("main__container-info");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h2.classList.add("main__subtitle");
    h2.textContent = `${data.crew[1].role.toUpperCase()}`;
    h1.classList.add("main__title-name");
    h1.textContent = `${data.crew[1].name.toUpperCase()}`;
    p.classList.add("main__paragraph");
    p.textContent = `${data.crew[1].bio}`;
    console.log(data.crew[1].role);
    div.append(h2, h1, p);

    const div_flex = document.createElement("div");
    const ul = document.createElement("ul");
    ul.classList.add("main__list");
    for (let i = 0; i < data.crew.length; i++) {
      const a = document.createElement("a");
      a.innerHTML = `<li class="main__list-item"></li>`;
      a.setAttribute("href", `${data.crew[i].rutes}`);
      if (data.crew[i].role.toLowerCase() === "mission specialist") {
        a.innerHTML = `<li class="active-point main__list-item"></li>`;
        a.setAttribute("href", ``);
      }
      ul.appendChild(a);
    }

    const img = document.createElement("img");
    img.classList.add("main__image");
    img.setAttribute("src", `${data.crew[1].images.webp}`);
    img.setAttribute("alt", `Imagen de ${data.crew[1].name}`);

    div_flex.append(ul);
    div_info.append(div, div_flex);
    fragment.append(div_info, img);
    div_main.appendChild(fragment);
  } else if (self.location.pathname.endsWith("pilot.html")) {
    const div_info = document.createElement("div");
    div_info.classList.add("main__container-info");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h2.classList.add("main__subtitle");
    h2.textContent = `${data.crew[2].role.toUpperCase()}`;
    h1.classList.add("main__title-name");
    h1.textContent = `${data.crew[2].name.toUpperCase()}`;
    p.classList.add("main__paragraph");
    p.textContent = `${data.crew[2].bio}`;
    console.log(data.crew[2].role);
    div.append(h2, h1, p);

    const div_flex = document.createElement("div");
    const ul = document.createElement("ul");
    ul.classList.add("main__list");
    for (let i = 0; i < data.crew.length; i++) {
      const a = document.createElement("a");
      a.innerHTML = `<li class="main__list-item"></li>`;
      a.setAttribute("href", `${data.crew[i].rutes}`);
      if (data.crew[i].role.toLowerCase() === "pilot") {
        a.innerHTML = `<li class="active-point main__list-item"></li>`;
        a.setAttribute("href", ``);
      }
      ul.appendChild(a);
    }

    const img = document.createElement("img");
    img.classList.add("main__image");
    img.setAttribute("src", `${data.crew[2].images.webp}`);
    img.setAttribute("alt", `Imagen de ${data.crew[2].name}`);

    div_flex.append(ul);
    div_info.append(div, div_flex);
    fragment.append(div_info, img);
    div_main.appendChild(fragment);
  } else if (self.location.pathname.endsWith("engineer.html")) {
    const div_info = document.createElement("div");
    div_info.classList.add("main__container-info");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h2.classList.add("main__subtitle");
    h2.textContent = `${data.crew[3].role.toUpperCase()}`;
    h1.classList.add("main__title-name");
    h1.textContent = `${data.crew[3].name.toUpperCase()}`;
    p.classList.add("main__paragraph");
    p.textContent = `${data.crew[3].bio}`;
    console.log(data.crew[3].role);
    div.append(h2, h1, p);

    const div_flex = document.createElement("div");
    const ul = document.createElement("ul");
    ul.classList.add("main__list");
    for (let i = 0; i < data.crew.length; i++) {
      const a = document.createElement("a");
      a.innerHTML = `<li class="main__list-item"></li>`;
      a.setAttribute("href", `${data.crew[i].rutes}`);
      if (data.crew[i].role.toLowerCase() === "flight engineer") {
        a.innerHTML = `<li class="active-point main__list-item"></li>`;
        a.setAttribute("href", ``);
      }
      ul.appendChild(a);
    }

    const img = document.createElement("img");
    img.classList.add("main__image");
    img.setAttribute("src", `${data.crew[3].images.webp}`);
    img.setAttribute("alt", `Imagen de ${data.crew[3].name}`);

    div_flex.append(ul);
    div_info.append(div, div_flex);
    fragment.append(div_info, img);
    div_main.appendChild(fragment);
  }
};
datos();
