document.addEventListener("DOMContentLoaded", function () {
  // Modo oscuro
  const darkModeToggle = document.getElementById("btnToggleDark");
  const body = document.body;

  if (localStorage.getItem("modoOscuro") === "true") {
    body.classList.add("dark-mode");
    darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
  } else {
    darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
  }

  function updateIcon() {
    if (body.classList.contains("dark-mode")) {
      darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
  }

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("modoOscuro", body.classList.contains("dark-mode"));
    updateIcon();
  });

  // Buscador noticias
  const input = document.getElementById("buscadorNoticias");
  const cards = document.querySelectorAll("#listaNoticias article");
  const noResultados = document.getElementById("noResultados");

  input.addEventListener("input", function () {
    const value = input.value.toLowerCase();
    let encontrados = 0;

    cards.forEach((card) => {
      const texto = card.textContent.toLowerCase();
      if (texto.includes(value)) {
        card.style.display = "block";
        card.style.opacity = 0;
        setTimeout(() => (card.style.opacity = 1), 0); // animación aparición
        encontrados++;
      } else {
        card.style.opacity = 0;
        setTimeout(() => (card.style.display = "none"), 300); // animación desaparición
      }
    });

    if (noResultados) {
      noResultados.style.display = encontrados === 0 ? "block" : "none";
    }
  });
});



  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    successMessage.classList.remove('d-none');
    form.reset();

    setTimeout(() => {
      successMessage.classList.add('d-none');
    }, 5000);
  });

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  // Expresión regular más estricta para validar el correo
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

  if (!emailRegex.test(email)) {
    alert("Por favor, escribe un correo electrónico válido.");
    emailInput.focus();
    return;
  }

  // Aquí podrías enviar el formulario (por ejemplo, con EmailJS, Formspree o fetch)
  alert("¡Mensaje enviado con éxito!");

  // Si no tienes backend, puedes limpiar el formulario después
  this.reset();
});

