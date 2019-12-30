console.log("Script loaded");

console.log(getAvailableProducts());

const products = getAvailableProducts();

function renderProducts(a) {
  let fisrtUl = document.querySelector(".products ul");

  for (let i = 0; i < a.length; i++) {
    let liId = document.createElement("li");
    fisrtUl.appendChild(liId);
    liId.textContent = `Product ID: ${a[i].id}`;

    let liName = document.createElement("li");
    fisrtUl.appendChild(liName);
    liName.textContent = `Name Of Product:  ${a[i].name}`;

    let liPrice = document.createElement("li");
    fisrtUl.appendChild(liPrice);
    liPrice.textContent = `The Price:  ${a[i].price}`;

    let liRating = document.createElement("li");
    fisrtUl.appendChild(liRating);
    liRating.textContent = `Rating: ${a[i].rating}`;

    let shippingLiParent = document.createElement("li");
    fisrtUl.appendChild(shippingLiParent);
    shippingLiParent.textContent = `Ships To:`;

    for (let q = 0; q < a[i].shipsTo.length; q++) {
      let shippingUl = document.createElement("ul");
      shippingLiParent.appendChild(shippingUl);
      shippingCountryLi = document.createElement("li");
      shippingUl.appendChild(shippingCountryLi);
      shippingCountryLi.textContent = a[i].shipsTo[q];
    }
  }
}

renderProducts(products);
