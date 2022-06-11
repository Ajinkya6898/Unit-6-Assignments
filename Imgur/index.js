let url = `https://fakestoreapi.com/products`;

async function getProduct() {
  let res = await fetch(`https://fakestoreapi.com/products`);
  //     renderProduct(data);
  let data = await res.json();
  renderProduct(data);
  console.log(data);
}
getProduct();

function renderProduct(data) {
  console.log(data);
  // let container = document.getElementById("container");
  // container.innerHTML = "";

  data.forEach(function (el) {
    console.log(el);
    let prodcart = document.createElement("div");
    prodcart.setAttribute("class", "prodcart");
    prodcart.setAttribute("class", "prodcart");
    let image = document.createElement("img");
    image.setAttribute("class", "append_img");
    image.src = el.image;
    let p = document.createElement("p");
    p.innerHTML = el.description;
    prodcart.append(image, p);
    document.querySelector(".product_div").append(prodcart);
  });
}
