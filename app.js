// Store product and cart data in localStorage

function viewProduct(name, price, image) {
  const product = { name, price, image };
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "product.html";
}

function addToCart() {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

// Render product details
if (window.location.pathname.includes("product.html")) {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  if (product) {
    document.getElementById("product-img").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `₹${product.price}`;
  }
}

// Render cart
if (window.location.pathname.includes("cart.html")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      total += Number(item.price);
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
        <p>${item.name} – ₹${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      container.appendChild(itemDiv);
    });
  }

  document.getElementById("cart-total").textContent = total.toFixed(2);
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function checkout() {
  alert("Thank you for your order!");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
}
