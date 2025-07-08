document.addEventListener("DOMContentLoaded", function () {
  // ----------- MODO OSCURO -----------
  const darkModeToggle = document.getElementById("btnToggleDark");
  const body = document.body;

  function updateIcon() {
    darkModeToggle.innerHTML = body.classList.contains("dark-mode")
      ? '<i class="bi bi-sun-fill"></i>'
      : '<i class="bi bi-moon-fill"></i>';
  }

  // Inicialización
  if (localStorage.getItem("modoOscuro") === "true") {
    body.classList.add("dark-mode");
  }
  updateIcon();

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("modoOscuro", body.classList.contains("dark-mode"));
    updateIcon();
  });

  // ----------- BUSCADOR DE NOTICIAS -----------
  const input = document.getElementById("buscadorNoticias");
  const cards = document.querySelectorAll("#listaNoticias article");
  const noResultados = document.getElementById("noResultados");

  if (input) {
    input.addEventListener("input", function () {
      const value = input.value.toLowerCase();
      let encontrados = 0;

      cards.forEach((card) => {
        const texto = card.textContent.toLowerCase();
        if (texto.includes(value)) {
          card.style.display = "block";
          card.style.opacity = 0;
          setTimeout(() => (card.style.opacity = 1), 0);
          encontrados++;
        } else {
          card.style.opacity = 0;
          setTimeout(() => (card.style.display = "none"), 300);
        }
      });

      if (noResultados) {
        noResultados.style.display = encontrados === 0 ? "block" : "none";
      }
    });
  }

  // ----------- VALIDACIÓN FORMULARIO CONTACTO -----------
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validación básica del HTML5
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Validación estricta de email
      const emailInput = document.getElementById("email");
      const email = emailInput.value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

      if (!emailRegex.test(email)) {
        alert("Por favor, escribe un correo electrónico válido.");
        emailInput.focus();
        return;
      }

      // Mostrar mensaje de éxito
      if (successMessage) {
        successMessage.classList.remove('d-none');
        setTimeout(() => {
          successMessage.classList.add('d-none');
        }, 5000);
      } else {
        alert("¡Mensaje enviado con éxito!");
      }

      form.reset();
    });
  }
});

