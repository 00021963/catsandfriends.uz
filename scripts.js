//go to top button
window.onscroll = function() {
    let btn = document.getElementById("goToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.classList.add("show");
      btn.classList.remove("hide");
    } else {
      btn.classList.add("hide");
      btn.classList.remove("show");
    }
  };
  
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

//SHOW MORE MODAL
document.querySelectorAll('.show-more-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    const productId = event.target.closest('.product').dataset.id; // Get data-id from parent
    const product = products.find(p => p.id == productId);

    if (product) {
      document.getElementById("modalImage").src = product.image;
      document.getElementById("modalName").textContent = product.name;
      document.getElementById("modalPrice").textContent = `Price: ${product.price} sum`;
      document.getElementById("modalDescription").textContent = product.description;

      document.getElementById("showMoreModal").style.display = "flex";

      document.getElementById("addToCart").dataset.id = product.id;
    }
  });
});

document.getElementById("closeShowMore").addEventListener("click", () => {
  document.getElementById("showMoreModal").style.display = "none";
});

//add to cart
document.getElementById("addToCart").addEventListener("click", () => {
  const productId = document.getElementById("addToCart").dataset.id;
  const product = products.find(p => p.id == productId);
  const quantityInput = document.getElementById("quantity");
  const quantity = parseInt(quantityInput.value);

  //form validation
  if (quantity < 1 || quantity > 10 || isNaN(quantity)) {
    alert("Please enter a quantity between 1 and 10.");
    quantityInput.focus();
    return; 
  }

  if (product) {
    document.getElementById("showMoreModal").style.display = "none";
    alert(`${quantity} x ${product.name} has been added to your cart!`);
  }
});

