// Selección de elementos
const buscarBtn = document.getElementById('buscar-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

// Función para mostrar el modal
const mostrarModal = () => {
  modal.style.display = 'flex'; // Muestra el modal
};

// Función para ocultar el modal
const ocultarModal = () => {
  modal.style.display = 'none'; // Oculta el modal
};

// Eventos
buscarBtn.addEventListener('click', mostrarModal); // Abrir modal
closeBtn.addEventListener('click', ocultarModal); // Cerrar modal

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    ocultarModal();
  }
});
