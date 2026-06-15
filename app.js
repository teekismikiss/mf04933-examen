// Array de objetos con la información principal de la aplicación
const cats = [
  {
    name: 'Siamés',
    origin: 'Tailandia',
    description: 'Gato elegante, sociable y muy comunicativo.',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=600&q=80',
    alt: 'Gato siamés sentado con mirada tranquila'
  },
  {
    name: 'Maine Coon',
    origin: 'Estados Unidos',
    description: 'Una raza grande, cariñosa y con pelaje abundante.',
    image: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?auto=format&fit=crop&w=600&q=80',
    alt: 'Gato Maine Coon de pelo largo mirando de frente'
  },
  {
    name: 'Bengalí',
    origin: 'Estados Unidos',
    description: 'Activo, curioso y con un pelaje que recuerda a un leopardo.',
    image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=600&q=80',
    alt: 'Gato bengalí acostado con pelaje moteado'
  }
];

const facts = [
  'Los gatos pueden dormir entre 12 y 16 horas al día.',
  'Cada gato tiene un patrón de nariz único, parecido a una huella digital.',
  'Los bigotes ayudan a los gatos a orientarse y medir espacios.',
  'El ronroneo puede expresar bienestar, pero también calma ante el estrés.'
];

// Console.log para comprobar que los datos se cargan correctamente
console.log('Listado de gatos:', cats);
console.log('Curiosidades disponibles:', facts);

// Función propia que genera las tarjetas de gatos dinámicamente
function renderCats(catList) {
  const catContainer = document.querySelector('#cat-container');
  catContainer.innerHTML = '';

  catList.forEach((cat) => {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <img src="${cat.image}" alt="${cat.alt}">
      <div class="card-content">
        <h3>${cat.name}</h3>
        <p class="origin">Origen: ${cat.origin}</p>
        <p>${cat.description}</p>
      </div>
    `;
    catContainer.appendChild(article);
  });
}

// Función para mostrar una curiosidad aleatoria
function showRandomFact() {
  const factText = document.querySelector('#fact-text');
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
  console.log('Curiosidad mostrada:', facts[randomIndex]);
}

// Función propia para activar o desactivar el modo oscuro
function applyTheme(theme) {
  const themeToggle = document.querySelector('#theme-toggle');
  const isDark = theme === 'dark';

  document.body.classList.toggle('dark-mode', isDark);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
    themeToggle.innerHTML = isDark
      ? '<i class="fa-solid fa-sun" aria-hidden="true"></i><span>Modo claro</span>'
      : '<i class="fa-solid fa-moon" aria-hidden="true"></i><span>Modo oscuro</span>';
  }

  console.log('Tema aplicado:', theme);
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('#theme-toggle');
  const factBtn = document.querySelector('#fact-btn');
  
  // LocalStorage: recupera la preferencia guardada de tema claro/oscuro
  const savedTheme = localStorage.getItem('theme');
  console.log('Tema guardado en localStorage:', savedTheme);

  // Aplica el tema guardado al cargar la página
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

  // Evento para guardar la preferencia del usuario en localStorage
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }

  // Evento para mostrar curiosidades
  if (factBtn) {
    factBtn.addEventListener('click', showRandomFact);
  }

  // Renderizar gatos
  renderCats(cats);

// Registro del Service Worker para activar la PWA y el modo offline
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then(() => console.log('Service Worker registrado correctamente'))
      .catch((error) => console.log('Error al registrar el Service Worker:', error));
  });
}

// Renderizar gatos al cargar
