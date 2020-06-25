let form = document.querySelector(".form");
let name = document.querySelector(".name");
let price = document.querySelector(".price");
let products = document.querySelector(".products");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let product = `
    <div class = 'product'
        <h1>${name.value}</h1>
        <p>${price.value}</p>
    </div>
  `;

  products.insertAdjacentHTML("afterbegin", product);
  name.value = "";
  price.value = "";
});
