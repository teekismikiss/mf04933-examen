# Mundo Gatuno - PWA

Una aplicación web progresiva (PWA) responsive y moderna sobre razas de gatos, cuidados y curiosidades felinas.
[Ver la aplicación](https://tu-usuario.github.io/pwa-gatos/)
##  Características principales

- **Diseño responsive** - Se adapta perfectamente a dispositivos móviles, tablets y escritorio
- **Modo oscuro** - Alterna entre tema claro y oscuro con persistencia en localStorage
- **PWA completa** - Funciona offline gracias al Service Worker registrado
- **Contenido dinámico** - Las tarjetas de gatos se generan con JavaScript desde un array de objetos
- **Accesibilidad** - Navegación por teclado y etiquetas ARIA implementadas
- **Rendimiento optimizado** - Animaciones suaves con transiciones CSS
- **Instalable** - Se puede instalar como aplicación en el dispositivo

##  Estructura del proyecto

```
examen/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS con variables de diseño
├── app.js              # Lógica JavaScript (renderizado, tema, PWA)
├── sw.js               # Service Worker para funcionamiento offline
├── manifest.json       # Manifest de la PWA
├── README.md           # Este archivo
└── icons/              # Directorio de iconos para la PWA
```

##  Cómo usar

### Instalación
No requiere instalación. Solo abre `index.html` en tu navegador web moderno.

### Características de uso
1. **Navega por las razas** - Desplázate por las secciones para descubrir diferentes razas de gatos
2. **Activa el modo oscuro** - Haz clic en el botón de "Modo oscuro" en la esquina superior derecha
3. **Descubre curiosidades** - Pulsa "Nueva curiosidad" para ver datos interesantes sobre gatos
4. **Instala como app** - En dispositivos móviles, usa la opción "Instalar" o "Agregar a pantalla de inicio"

## Tecnologías utilizadas

- **HTML5** - Semántica y estructura moderna
- **CSS3** - Grid, Flexbox, variables CSS, media queries
- **JavaScript (ES6+)** - Manipulación del DOM, localStorage, Service Worker
- **Font Awesome 6.5.2** - Iconos vectoriales
- **Google Fonts (Poppins)** - Tipografía moderna

## Paleta de colores

### Tema claro
- Color primario: `#6d4c41` (marrón)
- Color secundario: `#ffcc80` (naranja)
- Fondo: `#fff8f0` (crema)
- Texto: `#2f211d` (oscuro)

### Tema oscuro
- Color primario: `#ffcc80` (naranja)
- Color secundario: `#6d4c41` (marrón)
- Fondo: `#17110f` (muy oscuro)
- Texto: `#fff8f0` (claro)

##  Responsividad

La aplicación se adapta a tres puntos de quiebre principales:
- **Desktop**: 1100px de ancho máximo para contenido
- **Tablet**: Ajustes a partir de 800px
- **Mobile**: Optimización completa a partir de 480px

##  Persistencia de datos

- **localStorage** - Guarda la preferencia de tema (claro/oscuro) del usuario
- **Service Worker** - Cachea recursos para funcionamiento offline

##  Accesibilidad

- Navegación con teclado (Tab, Enter)
- Outline visible para elementos enfocados
- Atributos ARIA para lectores de pantalla
- Contraste de colores adecuado
- Semántica HTML correcta

##  Contenido incluido

### Razas destacadas
- Siamés (Tailandia)
- Maine Coon (Estados Unidos)
- Bengalí (Estados Unidos)

### Cuidados esenciales
- Alimentación apropiada
- Juego diario
- Revisiones veterinarias

### Curiosidades felinas
- Datos aleatorios sobre gatos
- Información educativa

## Navegación

- **Razas** - Sección con tarjetas de razas de gatos
- **Cuidados** - Guía de cuidados esenciales
- **Curiosidades** - Datos interesantes con botón interactivo






