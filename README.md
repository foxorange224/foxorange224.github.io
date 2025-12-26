# FoxWeb - Centro de Descargas Confiable

![FoxWeb Logo](https://i.imgur.com/qfsMx7V.png)

## 📋 Descripción
**FoxWeb** es un centro de descargas web que ofrece acceso rápido y seguro a software esencial, sistemas operativos, juegos clásicos y utilidades. El sitio está diseñado para ser intuitivo, rápido y completamente responsivo.

## ✨ Características Principales

### 🎨 Interfaz Moderna
- Diseño oscuro con acentos naranja (#FF4500)
- Completamente responsivo (adaptado para móviles, tablets y escritorio)
- Animaciones suaves y transiciones
- Iconos Font Awesome para mejor visualización

### 🗂️ Organización por Categorías
1. **Programas** - Software esencial (VLC, 7-Zip, Notepad++, etc.)
2. **Sistemas** - Distribuciones Linux y herramientas de rescate
3. **Juegos** - Títulos clásicos y ligeros
4. **Extras** - Drivers, utilidades y personalización
5. **APKs** - Aplicaciones útiles para Android

### 🔍 Funcionalidades Avanzadas
- **Buscador en tiempo real** - Filtra contenido dentro de cada categoría
- **Modales interactivos** - Para selección de versiones y más información
- **Sistema de pestañas** - Navegación fluida entre categorías
- **URL con hash** - Permite compartir enlaces directos a categorías específicas

### 📱 Compatibilidad
- ✅ Windows (desde XP hasta 11)
- ✅ Distribuciones Linux
- ✅ Dispositivos Android
- ✅ Hardware antiguo y moderno

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados con variables CSS
- **JavaScript Vanilla** - Funcionalidades interactivas
- **Font Awesome 6.5.1** - Iconos
- **Google Fonts (Inter)** - Tipografía moderna

### Hosting y Recursos
- **Imgur** - Hosting de imágenes
- **MediaFire** - Hosting de archivos
- **GitHub** - Control de versiones
- **CDN** - Para librerías externas

## 📁 Estructura del Proyecto

```
foxweb/
├── index.html          # Archivo principal HTML/CSS/JS
├── README.md           # Este archivo
└── recursos/           # (Externo) Imágenes y assets
```

## 🚀 Instalación y Uso

### Opción 1: Uso Directo
1. Descarga el archivo `index.html`
2. Ábrelo en cualquier navegador moderno
3. ¡Listo! El sitio funciona completamente offline

### Opción 2: Personalización
1. Clona o descarga el repositorio
2. Modifica el contenido en `index.html`
3. Actualiza los enlaces y textos según necesites
4. Cambia los colores editando las variables CSS en `:root`

## 🔧 Personalización

### Cambiar Colores
```css
:root {
    --primary: #FF4500;          /* Color principal */
    --primary-hover: #CC3700;    /* Hover del color principal */
    --bg-body: #0c0c0c;          /* Fondo principal */
    --bg-card: #161616;          /* Fondo de tarjetas */
    --text-main: #E0E0E0;        /* Texto principal */
}
```

### Agregar Nuevo Contenido
1. Encuentra la pestaña correspondiente en el HTML
2. Copia la estructura de un `.content-item`
3. Modifica:
   - Título
   - Descripción
   - Etiquetas (badges)
   - Enlace de descarga
   - Icono

### Actualizar Enlaces
- Reemplaza las URLs en los atributos `href`
- Para modales, actualiza las URLs en los botones `.modal-btn`

## 📊 Estructura de un Item

```html
<div class="content-item">
    <div class="item-header">
        <div class="item-icon"><i class="fa-solid fa-icono"></i></div>
        <div><h3 class="item-title">Título del Programa</h3></div>
    </div>
    <p class="item-description">Descripción detallada del software.</p>
    <div class="item-meta">
        <span class="item-badge">CATEGORÍA 1</span>
        <span class="item-badge">CATEGORÍA 2</span>
    </div>
    <a href="URL_DE_DESCARGA" class="download-btn" target="_blank">
        <i class="fa-solid fa-download"></i> Descargar
    </a>
</div>
```

## 🌐 Enlaces y Contacto

### Redes Sociales
- **YouTube**: [@FoxOrange224](https://www.youtube.com/@FoxOrange224)
- **Discord**: [Comunidad FoxWeb](https://discord.gg/r9v67gFRcp)
- **GitHub**: [foxorange224](https://github.com/foxorange224)
- **PayPal**: [Donaciones](https://www.paypal.com/ncp/payment/QLFVSACHGMW5E)

### Recursos Externos
- **Logo**: [Imgur](https://i.imgur.com/qfsMx7V.png)
- **Favicon**: [Imgur](https://i.imgur.com/5JzgCvZ.png)
- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

## ⚠️ Avisos Importantes

### Seguridad
- Todos los enlaces son verificados
- Software gratuito o de código abierto
- Enlaces oficiales cuando es posible

### Contraseñas
- Algunos archivos comprimidos usan: `foxorange224`

### Compatibilidad
- Testeado en Chrome, Firefox y Edge
- Responsive desde 320px hasta 4K
- No requiere conexión después de cargar

## 🔄 Mantenimiento

### Tareas Regulares
1. Verificar enlaces rotos
2. Actualizar versiones de software
3. Agregar nuevo contenido
4. Optimizar rendimiento

### Reportar Problemas
- Usa GitHub Issues
- Contacta por Discord
- Reporta enlaces caídos

## 📄 Licencia
© Copyright 2025 FoxOrange224 - FoxWeb

Este proyecto es de uso personal y educativo. Todos los derechos de software pertenecen a sus respectivos dueños.

## 🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor:
1. Haz fork del proyecto
2. Crea una rama para tu función
3. Realiza tus cambios
4. Envía un Pull Request

## 📞 Soporte
- **Discord**: Para ayuda técnica y comunidad
- **GitHub Issues**: Para reportar bugs
- **YouTube**: Para tutoriales y novedades

---

**✨ Creado con pasión por la comunidad de software libre y open source**
