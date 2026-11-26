/* COPHONE · JavaScript para las interacciones de la tienda.
 * Para exponer, sigue las secciones 1 a 6. La lista de equipos está al inicio, separada de la lógica.
 * HTML contiene la estructura. CSS controla el aspecto y los estados visuales.
 */

// #region Datos de los 16 equipos
const catalogo = [
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    brand: 'Apple',
    price: 3699,
    storage: '128 GB',
    ram: null,
    camera: 48,
    os: 'iOS',
    osFull: 'iOS',
    spec: 'Pantalla OLED de 6,1 pulgadas y cámara principal de 48 MP.',
    features: ['Chip A18', 'USB-C', 'Dynamic Island'],
    image: 'assets/iphone-16-plus.png',
    source: 'https://support.apple.com/en-us/121029',
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus',
    brand: 'Apple',
    price: 3799,
    storage: '128 GB',
    ram: null,
    camera: 48,
    os: 'iOS',
    osFull: 'iOS',
    spec: 'Pantalla OLED de 6,7 pulgadas y cámara principal de 48 MP.',
    features: ['Chip A18', 'USB-C', 'Dynamic Island'],
    image: 'assets/iphone-16-plus.png',
    source: 'https://support.apple.com/en-us/121030',
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    price: 3099,
    storage: '128 GB',
    ram: null,
    camera: 48,
    os: 'iOS',
    osFull: 'iOS',
    spec: 'Pantalla OLED de 6,3 pulgadas y cámara principal de 48 MP.',
    features: ['Chip A18 Pro', 'USB-C', 'ProMotion hasta 120 Hz'],
    image: 'assets/iphone-16-pro-max.png',
    source: 'https://support.apple.com/en-us/121031',
  },
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    price: 4899,
    storage: '256 GB',
    ram: null,
    camera: 48,
    os: 'iOS',
    osFull: 'iOS',
    spec: 'Pantalla OLED de 6,9 pulgadas y cámara principal de 48 MP.',
    features: ['Chip A18 Pro', 'USB-C', 'ProMotion hasta 120 Hz'],
    image: 'assets/iphone-16-pro-max.png',
    source: 'https://support.apple.com/en-us/121032',
  },
  {
    id: 'galaxy-s26',
    name: 'Galaxy S26',
    brand: 'Samsung',
    price: 3699,
    storage: '256 GB',
    ram: 12,
    camera: 50,
    os: 'Android',
    osFull: 'Android 16 / One UI 8.5',
    spec: 'Pantalla AMOLED de 6,3 pulgadas y cámara principal de 50 MP.',
    features: ['Hasta 120 Hz', '12 GB RAM', 'USB-C'],
    image: 'assets/galaxy-s26.jpg',
    source:
      'https://api.samsungmobilepress.com/press-releases/samsung-unveils-galaxy-s26-series-intuitive-galaxy-ai',
  },
  {
    id: 'galaxy-s26-plus',
    name: 'Galaxy S26+',
    brand: 'Samsung',
    price: 4399,
    storage: '256 GB',
    ram: 12,
    camera: 50,
    os: 'Android',
    osFull: 'Android 16 / One UI 8.5',
    spec: 'Pantalla AMOLED de 6,7 pulgadas y cámara principal de 50 MP.',
    features: ['Hasta 120 Hz', '12 GB RAM', 'USB-C'],
    image: 'assets/galaxy-s26-plus.jpg',
    source:
      'https://api.samsungmobilepress.com/press-releases/samsung-unveils-galaxy-s26-series-intuitive-galaxy-ai',
  },
  {
    id: 'galaxy-s26-ultra',
    name: 'Galaxy S26 Ultra',
    brand: 'Samsung',
    price: 4409,
    storage: '256 GB',
    ram: 12,
    camera: 200,
    os: 'Android',
    osFull: 'Android 16 / One UI 8.5',
    spec: 'Pantalla AMOLED de 6,9 pulgadas y cámara principal de 200 MP.',
    features: ['Hasta 120 Hz', 'S Pen', 'Snapdragon 8 Elite Gen 5 for Galaxy'],
    image: 'assets/galaxy-s26-ultra.jpg',
    source:
      'https://api.samsungmobilepress.com/press-releases/samsung-unveils-galaxy-s26-series-intuitive-galaxy-ai',
  },
  {
    id: 'galaxy-z-fold7',
    name: 'Galaxy Z Fold7',
    brand: 'Samsung',
    price: 6799,
    storage: '256 GB',
    ram: 12,
    camera: 200,
    os: 'Android',
    osFull: 'Android 16 / One UI 8',
    spec: 'Teléfono plegable con pantalla interior de 8 pulgadas.',
    features: [
      'Pantalla exterior de 6,5 pulgadas',
      'Snapdragon 8 Elite for Galaxy',
      'Hasta 120 Hz',
    ],
    image: 'assets/galaxy-z-fold7.jpg',
    source:
      'https://news.samsung.com/global/samsung-galaxy-z-fold7-raising-the-bar-for-smartphones',
  },
  {
    id: 'xiaomi-17',
    name: 'Xiaomi 17',
    brand: 'Xiaomi',
    price: 3399,
    storage: '256 GB',
    ram: 12,
    camera: 50,
    os: 'Android',
    osFull: 'Android / Xiaomi HyperOS',
    spec: 'Pantalla OLED de 6,3 pulgadas y sistema de cámaras Leica.',
    features: [
      'Snapdragon 8 Elite Gen 5',
      'Carga por cable de hasta 100 W',
      'Pantalla de hasta 120 Hz',
    ],
    image: 'assets/xiaomi-17.jpg',
    source: 'https://www.mi.com/global/product/xiaomi-17/specs/',
  },
  {
    id: 'pixel-11',
    name: 'Pixel 11',
    brand: 'Google',
    price: 4785,
    storage: '256 GB',
    ram: 12,
    camera: 48,
    os: 'Android',
    osFull: 'Android',
    spec: 'Pantalla Actua de 6,3 pulgadas y procesador Tensor G6.',
    features: [
      'Google Tensor G6',
      'Pantalla de hasta 120 Hz',
      'Teleobjetivo óptico 5x',
    ],
    image: 'assets/pixel-11.webp',
    source: 'https://support.google.com/pixelphone/answer/7158570?hl=en',
  },
  {
    id: 'motorola-edge-50-ultra',
    name: 'Motorola edge 50 ultra',
    brand: 'Motorola',
    price: 2499,
    storage: '512 GB',
    ram: 12,
    camera: 50,
    os: 'Android',
    osFull: 'Android 14',
    spec: 'Pantalla pOLED de 6,7 pulgadas y cámara principal de 50 MP.',
    features: [
      'Snapdragon 8s Gen 3',
      'Pantalla de hasta 144 Hz',
      'Carga por cable de hasta 125 W',
    ],
    image: 'assets/motorola-edge-50-ultra.png',
    source: 'https://www.motorola.com.ar/motorola-edge-50-ultra/p',
  },
  {
    id: 'redmi-note-15',
    name: 'Redmi Note 15',
    brand: 'Xiaomi',
    price: 949,
    storage: '256 GB',
    ram: 8,
    camera: 108,
    os: 'Android',
    osFull: 'HyperOS 2',
    spec: 'Pantalla AMOLED de 6,77 pulgadas y cámara principal de 108 MP.',
    features: ['Helio G100-Ultra', 'Pantalla de hasta 120 Hz'],
    image: 'assets/redmi-note-15.png',
    source: 'https://www.mi.com/pe/product/redmi-note-15/specs/',
  },
  {
    id: 'redmi-note-15-pro',
    name: 'Redmi Note 15 Pro',
    brand: 'Xiaomi',
    price: 1299,
    storage: '256 GB',
    ram: 8,
    camera: 200,
    os: 'Android',
    osFull: 'HyperOS 2',
    spec: 'Pantalla AMOLED de 6,77 pulgadas y cámara principal de 200 MP con OIS.',
    features: ['Helio G200-Ultra', 'Batería típica de 6500 mAh', 'Carga de hasta 45 W'],
    image: 'assets/redmi-note-15-pro.png',
    source: 'https://www.mi.com/pe/product/redmi-note-15-pro/specs/',
  },
  {
    id: 'redmi-note-15-pro-5g',
    name: 'Redmi Note 15 Pro 5G',
    brand: 'Xiaomi',
    price: 1549,
    storage: '512 GB',
    ram: 8,
    camera: 200,
    os: 'Android',
    osFull: 'HyperOS 2',
    spec: 'Conectividad 5G y cámara principal de 200 MP con OIS.',
    features: ['Dimensity 7400-Ultra', 'Vídeo trasero en 4K'],
    image: 'assets/redmi-note-15-pro-5g.png',
    source: 'https://www.mi.com/pe/product/redmi-note-15-pro-5g/specs/',
  },
  {
    id: 'poco-m8-5g',
    name: 'POCO M8 5G',
    brand: 'POCO',
    price: 1099,
    storage: '256 GB',
    ram: 8,
    camera: 50,
    os: 'Android',
    osFull: 'HyperOS 2',
    spec: 'Pantalla AMOLED de 6,77 pulgadas y cámara principal de 50 MP.',
    features: [
      'Snapdragon 6 Gen 3',
      'Batería típica de 5520 mAh',
      'Carga de hasta 45 W',
    ],
    image: 'assets/poco-m8-5g.png',
    source: 'https://www.mi.com/pe/product/poco-m8-5g/specs/',
  },
  {
    id: 'poco-x8-pro',
    name: 'POCO X8 Pro',
    brand: 'POCO',
    price: 1699,
    storage: '256 GB',
    ram: 8,
    camera: 50,
    os: 'Android',
    osFull: 'HyperOS 3',
    spec: 'Cámara principal de 50 MP con OIS y almacenamiento UFS 4.1.',
    features: ['Dimensity 8500-Ultra', 'Grabación de vídeo 4K', 'Memoria LPDDR5X'],
    image: 'assets/poco-x8-pro.png',
    source: 'https://www.mi.com/pe/product/poco-x8-pro/specs/',
  },
];

// #endregion

// 1. Estado. Favoritos y pedido se guardan en el navegador.
const numeroWhatsApp = '51918172401';
const claveFavoritos = 'cophone.preview.favorites';
const clavePedido = 'cophone.preview.bag';
const rutas = {
  '#/inicio': 'inicio',
  '#/tienda': 'tienda',
  '#/favoritos': 'favoritos',
};
const porId = (id) => document.getElementById(id);
const buscarEquipo = (id) => catalogo.find((equipo) => equipo.id === id);
const buscador = porId('buscar');
const capacidad = porId('storage-filter');
const orden = porId('sort-filter');
const fichas = porId('product-grid');
const fichaDialogo = porId('product-dialog');
const pedidoDialogo = porId('order-dialog');
const marcas = document.querySelectorAll('[data-brand]');
const formatoSoles = new Intl.NumberFormat('es-PE', {
  style: 'currency',
  currency: 'PEN',
  maximumFractionDigits: 0,
});

let vista = rutas[location.hash] || 'inicio';
let marca = 'Todas';
let favoritos = [...new Set(leerLista(claveFavoritos))].filter(buscarEquipo);
let pedido = leerLista(clavePedido)
  .filter(
    (item) => buscarEquipo(item?.id) && Number.isInteger(item.qty) && item.qty > 0,
  )
  .map(({ id, qty }) => ({ id, qty: Math.min(qty, 5) }));
let tiempoAviso;

function leerLista(clave) {
  try {
    const lista = JSON.parse(localStorage.getItem(clave));
    return Array.isArray(lista) ? lista : [];
  } catch {
    return [];
  }
}

function guardarLista(clave, lista) {
  try {
    localStorage.setItem(clave, JSON.stringify(lista));
  } catch {
    // La lista se conserva en memoria si el navegador bloquea el guardado.
  }
}

function precioEnSoles(precio) {
  return precio > 0 ? formatoSoles.format(precio) : 'Precio a consultar';
}

// 2. Catálogo. Filtra los datos y rellena la plantilla que está en index.html.
function mostrarCatalogo() {
  const texto = buscador.value.trim().toLowerCase();
  const resultados = catalogo.filter((equipo) => {
    const descripcion = `${equipo.name} ${equipo.brand} ${equipo.spec}`.toLowerCase();
    return (
      descripcion.includes(texto) &&
      (marca === 'Todas' || equipo.brand === marca) &&
      (!capacidad.value || equipo.storage === `${capacidad.value} GB`) &&
      (vista !== 'favoritos' || favoritos.includes(equipo.id))
    );
  });

  if (orden.value === 'price')
    resultados.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
  if (orden.value === 'name') resultados.sort((a, b) => a.name.localeCompare(b.name));

  porId('portada').hidden = vista !== 'inicio' || Boolean(texto);
  porId('catalog-title').textContent =
    vista === 'favoritos' ? 'Tus favoritos' : 'Catálogo de celulares';
  porId('catalog-count').textContent =
    resultados.length === 1 ? '1 equipo' : `${resultados.length} equipos`;
  const vacio = porId('catalog-empty');
  vacio.hidden = resultados.length > 0;
  vacio.textContent =
    vista === 'favoritos' && favoritos.length === 0
      ? 'Guarda un equipo con el corazón para verlo aquí.'
      : 'No hay equipos con esos filtros.';

  for (const boton of marcas) {
    boton.setAttribute('aria-pressed', String(boton.dataset.brand === marca));
  }
  document
    .querySelector('.saved-button')
    .setAttribute('aria-pressed', String(vista === 'favoritos'));
  fichas.replaceChildren(...resultados.map(crearFicha));
}

function crearFicha(equipo) {
  const ficha = porId('product-template').content.firstElementChild.cloneNode(true);
  for (const campo of ['brand', 'storage', 'os', 'spec']) {
    ficha.querySelector(`[data-field="${campo}"]`).textContent = equipo[campo];
  }
  ficha.querySelector('[data-field="price"]').textContent = precioEnSoles(equipo.price);

  const imagen = ficha.querySelector('img');
  imagen.src = equipo.image;
  imagen.alt = equipo.name;
  const foto = ficha.querySelector('.phone-image');
  foto.setAttribute('aria-label', `Ver ficha de ${equipo.name}`);
  foto.onclick = () => mostrarFicha(equipo);
  const titulo = ficha.querySelector('.phone-name');
  titulo.textContent = equipo.name;
  titulo.onclick = () => mostrarFicha(equipo);

  const corazon = ficha.querySelector('.heart');
  marcarFavorito(corazon, equipo);
  corazon.onclick = () => cambiarFavorito(corazon, equipo);
  const agregar = ficha.querySelector('.add-circle');
  agregar.setAttribute('aria-label', `Añadir ${equipo.name} al pedido`);
  agregar.onclick = () => agregarAlPedido(equipo);
  return ficha;
}

function mostrarFicha(equipo) {
  const datos = {
    brand: equipo.brand,
    title: equipo.name,
    spec: equipo.spec,
    storage: equipo.storage,
    camera: `${equipo.camera} MP`,
    ram: equipo.ram ? `${equipo.ram} GB` : 'No publicada',
    os: equipo.osFull || equipo.os,
    price: `Precio referencial: ${precioEnSoles(equipo.price)}`,
  };
  for (const [campo, valor] of Object.entries(datos)) {
    porId(`detail-${campo}`).textContent = valor;
  }
  porId('detail-image').src = equipo.image;
  porId('detail-image').alt = equipo.name;
  porId('detail-notice').textContent =
    'El vendedor te confirmará precio y disponibilidad.';
  porId('detail-features').replaceChildren(
    ...equipo.features.map((dato) => {
      const item = document.createElement('li');
      item.textContent = dato;
      return item;
    }),
  );
  porId('detail-add').onclick = () => {
    if (!agregarAlPedido(equipo)) return;
    fichaDialogo.close();
    abrirPedido();
  };
  fichaDialogo.showModal();
}

// 3. Favoritos. JavaScript cambia aria-pressed y CSS colorea el corazón.
function marcarFavorito(boton, equipo) {
  const marcado = favoritos.includes(equipo.id);
  boton.setAttribute('aria-pressed', String(marcado));
  boton.setAttribute(
    'aria-label',
    `${marcado ? 'Quitar de favoritos' : 'Guardar favorito'}: ${equipo.name}`,
  );
}

function cambiarFavorito(boton, equipo) {
  if (favoritos.includes(equipo.id)) {
    favoritos = favoritos.filter((id) => id !== equipo.id);
  } else {
    favoritos.push(equipo.id);
  }
  guardarLista(claveFavoritos, favoritos);
  porId('favorite-count').textContent = favoritos.length;
  if (vista === 'favoritos') {
    mostrarCatalogo();
    (fichas.querySelector('.heart') || porId('catalog-title')).focus();
  } else {
    marcarFavorito(boton, equipo);
  }
}

// 4. Pedido. Guarda el modelo y su cantidad, y actualiza el total.
function unidades() {
  return pedido.reduce((total, linea) => total + linea.qty, 0);
}

function avisar(texto) {
  if (fichaDialogo.open) porId('detail-notice').textContent = texto;
  const aviso = porId('notice');
  aviso.textContent = texto;
  aviso.hidden = false;
  clearTimeout(tiempoAviso);
  tiempoAviso = setTimeout(() => {
    aviso.hidden = true;
  }, 2600);
}

function guardarPedido() {
  guardarLista(clavePedido, pedido);
  porId('bag-count').textContent = unidades();
}

function agregarAlPedido(equipo) {
  const linea = pedido.find((item) => item.id === equipo.id);
  if (linea?.qty >= 5) {
    avisar('Puedes añadir hasta 5 unidades por modelo.');
    return false;
  }
  if (!linea && pedido.length >= 10) {
    avisar('Puedes seleccionar hasta 10 modelos.');
    return false;
  }
  if (linea) linea.qty += 1;
  else pedido.push({ id: equipo.id, qty: 1 });
  guardarPedido();
  avisar(`${equipo.name} añadido a tu pedido`);
  return true;
}

function crearLineaPedido(linea) {
  const equipo = buscarEquipo(linea.id);
  const fila = porId('order-line-template').content.firstElementChild.cloneNode(true);
  const imagen = fila.querySelector('img');
  imagen.src = equipo.image;
  const valores = {
    name: equipo.name,
    storage: equipo.storage,
    price: precioEnSoles(equipo.price),
    qty: linea.qty,
  };
  for (const [campo, valor] of Object.entries(valores)) {
    fila.querySelector(`[data-field="${campo}"]`).textContent = valor;
  }

  const acciones = {
    less: 'Quitar una unidad de',
    more: 'Añadir una unidad de',
    remove: 'Eliminar',
  };
  for (const boton of fila.querySelectorAll('[data-quantity]')) {
    const accion = boton.dataset.quantity;
    boton.setAttribute('aria-label', `${acciones[accion]} ${equipo.name}`);
    boton.disabled = accion === 'more' && linea.qty >= 5;
    boton.onclick = () => cambiarCantidad(linea, accion);
  }
  return fila;
}

function cambiarCantidad(linea, accion) {
  const posicion = pedido.indexOf(linea);
  if (accion === 'remove') linea.qty = 0;
  if (accion === 'less') linea.qty -= 1;
  if (accion === 'more') linea.qty = Math.min(linea.qty + 1, 5);
  pedido = pedido.filter((item) => item.qty > 0);
  guardarPedido();
  mostrarPedido();

  const filas = porId('order-lines').children;
  const fila = filas[Math.min(posicion, filas.length - 1)];
  const boton = fila?.querySelector(`[data-quantity="${accion}"]`);
  if (boton && !boton.disabled) boton.focus();
  else (fila?.querySelector('button') || pedidoDialogo.querySelector('button')).focus();
}

function mostrarPedido() {
  const cantidad = unidades();
  porId('order-count').textContent = cantidad
    ? `${cantidad} ${cantidad === 1 ? 'equipo' : 'equipos'} para cotizar.`
    : 'Aún no has añadido equipos.';
  porId('order-lines').replaceChildren(...pedido.map(crearLineaPedido));
  porId('order-summary').hidden = cantidad === 0;
  const total = pedido.reduce(
    (suma, linea) => suma + (buscarEquipo(linea.id).price || 0) * linea.qty,
    0,
  );
  const precioPendiente = pedido.some((linea) => !buscarEquipo(linea.id).price);
  porId('order-total').textContent = precioPendiente
    ? 'A cotizar'
    : precioEnSoles(total);
  porId('order-whatsapp').href = enlaceWhatsApp(mensajePedido());
}

function abrirPedido() {
  mostrarPedido();
  pedidoDialogo.showModal();
}

// 5. WhatsApp. Arma el mensaje y lo convierte en un enlace.
function mensajePedido() {
  const bloques = pedido.map((linea, indice) => {
    const equipo = buscarEquipo(linea.id);
    const datos = [
      `${indice + 1}. ${equipo.name}`,
      `Cantidad: ${linea.qty}`,
      `Almacenamiento: ${equipo.storage}`,
    ];
    if (equipo.ram) datos.push(`RAM: ${equipo.ram} GB`);
    datos.push(`Precio unitario referencial: ${precioEnSoles(equipo.price)}`);
    return datos.join('\n');
  });
  return ['Hola COPHONE, quisiera cotizar estos equipos:', ...bloques].join('\n\n');
}

function enlaceWhatsApp(mensaje) {
  return `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
}

// 6. Eventos. Conecta los clics y los filtros del HTML con las funciones.
function limpiarFiltros() {
  buscador.value = '';
  capacidad.value = '';
  orden.value = 'default';
  marca = 'Todas';
}

function navegar(hash) {
  vista = rutas[hash];
  if (location.hash !== hash) location.hash = hash;
  mostrarCatalogo();
  if (vista === 'inicio') window.scrollTo({ top: 0 });
  else porId('catalogo').scrollIntoView({ block: 'start' });
}

for (const boton of marcas) {
  boton.onclick = () => {
    marca = boton.dataset.brand;
    navegar('#/tienda');
  };
}

const acciones = {
  home: () => {
    limpiarFiltros();
    navegar('#/inicio');
  },
  catalog: () => navegar('#/tienda'),
  favorites: () => {
    limpiarFiltros();
    navegar(vista === 'favoritos' ? '#/tienda' : '#/favoritos');
  },
  bag: abrirPedido,
  policies: () => porId('policies-dialog').showModal(),
};
for (const control of document.querySelectorAll('[data-action]')) {
  control.onclick = (evento) => {
    evento.preventDefault();
    acciones[control.dataset.action]();
  };
}
for (const boton of document.querySelectorAll('[data-close]')) {
  boton.onclick = () => boton.closest('dialog').close();
}
for (const dialogo of document.querySelectorAll('dialog')) {
  dialogo.onclick = (evento) => {
    if (evento.target !== dialogo) return;
    const { left, right, top, bottom } = dialogo.getBoundingClientRect();
    if (
      evento.clientX < left ||
      evento.clientX > right ||
      evento.clientY < top ||
      evento.clientY > bottom
    )
      dialogo.close();
  };
}
for (const enlace of document.querySelectorAll('[data-wa]')) {
  enlace.href = enlaceWhatsApp(enlace.dataset.wa);
}

buscador.oninput = mostrarCatalogo;
capacidad.onchange = mostrarCatalogo;
orden.onchange = mostrarCatalogo;
porId('reset-filters').onclick = () => {
  limpiarFiltros();
  mostrarCatalogo();
};
window.addEventListener('hashchange', () => {
  if (rutas[location.hash] && rutas[location.hash] !== vista) navegar(location.hash);
});

porId('favorite-count').textContent = favoritos.length;
porId('bag-count').textContent = unidades();
mostrarCatalogo();
if (vista !== 'inicio') porId('catalogo').scrollIntoView({ block: 'start' });
