(function loadItems() {
  fetch("https://my-json-server.typicode.com/FacelessWanderer/flowers/stock")
    .then((res) => res.json())
    .then((data) => {
      renderItems(data);
    })
    .catch(err => {
      console.log(err);
      output.innerHTML = `<h1>Sorry, try again later...</h1>
      <h5>We will try to load items again in 1.5s</h5>`;
      setTimeout(loadItems, 1500);
    })
})()


const output = document.querySelector(".cards");

function renderItems(items) {
  output.innerHTML = "";

  for (const { name, url, price } of items) {
    output.innerHTML += (`
    <div class="card">
      <img class="card__image" src="${url}" alt="Picture of ${name}">
      <div class="card__info">
        <div class="card__description">
          <span class="card__title">${name}</span>
          <span class="card__price">${price}$</span>
        </div>
        
        <img src="images/arrow.svg" class="icon" alt="Arrow icon - more info about this flower">
      </div>
    </div>
    `);
  }
}
