function moverCarrusel(id, direccion) {
  const carrusel = document.getElementById(id);
  const scrollAmount = 300;
  carrusel.scrollBy({
    left: scrollAmount * direccion,
    behavior: "smooth"
  });
}

const carrito = [];
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const vaciarCarrito = document.getElementById("vaciarCarrito");

document.querySelectorAll(".agregar-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const card = e.target.closest(".tarjeta");
    carrito.push({ titulo, precio });
    actualizarCarrito();
  });
});

vaciarCarrito.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
});

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.titulo} - $${item.precio.toFixed(2)}`;
    listaCarrito.appendChild(li);
    total += item.precio;
  });
  totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}

