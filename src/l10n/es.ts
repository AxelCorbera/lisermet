// Archivo de localización — todos los textos visibles de la aplicación en español

export const es = {
  nav: {
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Trabajos', href: '#trabajos' },
      { label: 'Clientes', href: '#clientes' },
      { label: 'Contacto', href: '#contacto' },
    ],
    cta: 'Solicitar presupuesto',
  },

  hero: {
    tagline: 'Precisión en metal,\nresultados reales.',
    subtitulo:
      'Más de 30 años fabricando piezas a medida en chapa metálica para la industria nacional.',
    cta: 'Solicitar presupuesto',
    ctaSecundario: 'Conocer más',
    logoAlt: 'Lisermet Metalúrgica',
  },

  quienesSomos: {
    sectionLabel: 'Quiénes Somos',
    titulo: 'Tres décadas\nforjando experiencia',
    descripcion:
      'Somos una empresa familiar con más de 30 años en el rubro metalúrgico. Nos dedicamos a la fabricación de gabinetes a medida en chapa metálica para todo tipo de industrias y comercios.',
    descripcion2:
      'Destacamos por la mejora constante  y equipamiento de última generación para darle a nuestros clientes la calidad que sus productos se merecen.',
    valores: [
      { titulo: 'Precisión', descripcion: 'Tolerancias exactas en cada pieza fabricada.' },
      { titulo: '+30 Años', descripcion: 'Tres décadas de trayectoria en el sector industrial.' },
      { titulo: 'Compromiso', descripcion: 'Plazos de entrega y calidad garantizada.' },
    ],
    imagenAlt: 'Planta industrial de Lisermet',
  },

  servicios: {
    sectionLabel: 'Servicios',
    titulo: 'Nuestros Servicios',
    items: [
      {
        id: 'corte-laser',
        titulo: 'Corte Láser',
        descripcion:
          'Esta máquina nos permite la creación de todo tipo de piezas en acero de hasta 3 mm de espesor.',
        imagen: './assets/corte-laser.jpg',
        imagenAlt: 'Corte láser en chapa metálica',
      },
      {
        id: 'plegado-cnc',
        titulo: 'Plegado CNC',
        descripcion:
          'Contamos con plegados de hasta 2.000 mm como máximo.',
        imagen: './assets/plegado-cnc.jpg',
        imagenAlt: 'Plegado CNC de chapa metálica',
      },
      {
        id: 'soldadura-laser',
        titulo: 'Soldadura Láser',
        descripcion:
          'Uniones de alta resistencia y mínima distorsión térmica. Ideal para piezas de precisión que requieren acabados impecables.',
        imagen: './assets/soldadura-laser.jpg',
        imagenAlt: 'Soldadura láser en metal',
      },
      {
        id: 'guillotina',
        titulo: 'Guillotina',
        descripcion: 'Realizamos cortes de chapa de hasta 3.000 mm.',
        imagen: './assets/guillotina.jpg',
        imagenAlt: 'Guillotina de corte de chapa',
      },
      {
        id: 'punzonadora-cnc',
        titulo: 'Punzonadora CNC',
        descripcion:
          'Una máquina versátil, ideal para trabajos de gran producción.',
        imagen: './assets/punzonadora-cnc.jpg',
        imagenAlt: 'Punzonadora CNC en operación',
      },
      {
        id: 'pintura-horno',
        titulo: 'Pintura al Horno',
        descripcion:
          'Entregamos cada trabajo con terminación en pintura electrostática, en una amplia gama de colores.',
        imagen: './assets/pintura-horno.jpg',
        imagenAlt: 'Pintura electrostática al horno',
      },
      {
        id: 'envios',
        titulo: 'Envíos',
        descripcion:
          'Hacemos entregas directas en CABA y AMBA, o a través de expresos a todo el país.',
        imagen: './assets/envios.jpg',
        imagenAlt: 'Envíos y logística Lisermet',
      },
    ],
  },

  trabajos: {
    sectionLabel: 'Trabajos',
    titulo: 'Nuestros Trabajos',
    subtitulo:
      'Una muestra de las piezas y proyectos que desarrollamos para la industria.',
    items: [
      { id: 'trabajo-1',  imagen: './assets/trabajo-1.jpg',  alt: 'Trabajo realizado 1' },
      { id: 'trabajo-2',  imagen: './assets/trabajo-2.jpg',  alt: 'Trabajo realizado 2' },
      { id: 'trabajo-3',  imagen: './assets/trabajo-3.jpg',  alt: 'Trabajo realizado 3' },
      { id: 'trabajo-4',  imagen: './assets/trabajo-4.jpg',  alt: 'Trabajo realizado 4' },
      { id: 'trabajo-5',  imagen: './assets/trabajo-5.jpg',  alt: 'Trabajo realizado 5' },
      { id: 'trabajo-6',  imagen: './assets/trabajo-6.jpg',  alt: 'Trabajo realizado 6' },
      { id: 'trabajo-7',  imagen: './assets/trabajo-7.jpg',  alt: 'Trabajo realizado 7' },
      { id: 'trabajo-8',  imagen: './assets/trabajo-8.jpg',  alt: 'Trabajo realizado 8' },
      { id: 'trabajo-9',  imagen: './assets/trabajo-9.jpg',  alt: 'Trabajo realizado 9' },
      { id: 'trabajo-10', imagen: './assets/trabajo-10.jpg', alt: 'Trabajo realizado 10' },
      { id: 'trabajo-11', imagen: './assets/trabajo-11.jpg', alt: 'Trabajo realizado 11' },
      { id: 'trabajo-12', imagen: './assets/trabajo-12.jpg', alt: 'Trabajo realizado 12' },
    ],
  },

  proceso: {
    sectionLabel: 'Cómo trabajamos',
    titulo: 'Del pedido al\nproducto terminado',
    subtitulo: 'Un proceso claro y rápido para que tu proyecto no espere.',
    pasos: [
      {
        id: 'paso-1',
        titulo: 'Recibimos tu pedido',
        descripcion: 'Envíanos un email con tu archivo técnico (DXF, PDF, etc.) y los detalles del proyecto.',
      },
      {
        id: 'paso-2',
        titulo: 'Cotizamos y respondemos',
        descripcion: 'Analizamos tu archivo, calculamos tiempos y materiales, y te enviamos el presupuesto por email.',
      },
      {
        id: 'paso-3',
        titulo: 'Proyecto aprobado',
        descripcion: 'Con tu aprobación y la seña correspondiente, el trabajo queda confirmado en agenda.',
      },
      {
        id: 'paso-4',
        titulo: 'Entra a producción',
        descripcion: 'Tu pieza ingresa a nuestra línea de fabricación con control de calidad en cada etapa.',
      },
      {
        id: 'paso-5',
        titulo: 'Producto terminado',
        descripcion: 'Te avisamos cuando está listo. Retiro en planta o coordinamos el envío a tu puerta.',
      },
    ],
  },

  clientes: {
    sectionLabel: 'Clientes',
    titulo: 'Nuestros Clientes',
    subtitulo: 'Empresas que confían en nuestra calidad y compromiso.',
    items: [
      { id: 'cliente-1', nombre: 'Empresa Industrial A', logo: './assets/cliente-1.png' },
      { id: 'cliente-2', nombre: 'Grupo Manufacturero B', logo: './assets/cliente-2.png' },
      { id: 'cliente-3', nombre: 'Industrias C', logo: './assets/cliente-3.png' },
      { id: 'cliente-4', nombre: 'Metalúrgica D', logo: './assets/cliente-4.png' },
      { id: 'cliente-5', nombre: 'Corporación E', logo: './assets/cliente-5.png' },
      { id: 'cliente-6', nombre: 'Corporación F', logo: './assets/cliente-6.png' },
      { id: 'cliente-7', nombre: 'Corporación G', logo: './assets/cliente-7.png' },
      { id: 'cliente-8', nombre: 'Corporación H', logo: './assets/cliente-8.png' },
      { id: 'cliente-9', nombre: 'Corporación I', logo: './assets/cliente-9.png' },
      { id: 'cliente-10', nombre: 'Corporación J', logo: './assets/cliente-10.png' },
      { id: 'cliente-11', nombre: 'Corporación K', logo: './assets/cliente-11.png' },
      { id: 'cliente-12', nombre: 'Corporación L', logo: './assets/cliente-12.png' },
      { id: 'cliente-13', nombre: 'Corporación M', logo: './assets/cliente-13.png' },
      { id: 'cliente-14', nombre: 'Corporación N', logo: './assets/cliente-14.png' },
      { id: 'cliente-15', nombre: 'Corporación O', logo: './assets/cliente-15.png' },
      { id: 'cliente-16', nombre: 'Corporación P', logo: './assets/cliente-16.png' },
      { id: 'cliente-17', nombre: 'Corporación Q', logo: './assets/cliente-17.png' },

    ],
  },

  contacto: {
    sectionLabel: 'Contacto',
    titulo: 'Hablemos de\ntu proyecto',
    subtitulo:
      'Completá el formulario y nos comunicamos a la brevedad.',
    form: {
      nombre: 'Nombre',
      nombrePlaceholder: 'Tu nombre completo',
      email: 'Email',
      emailPlaceholder: 'tu@email.com',
      mensaje: 'Mensaje',
      mensajePlaceholder: '¿En qué podemos ayudarte?',
      enviar: 'Enviar mensaje',
    },
    info: {
      whatsapp: '5491140505333',
      whatsappLabel: 'Whatsapp',
      whatsappDisplay: '+54 9 11 4050-5333',
      emailLabel: 'Email',
      email: 'info@lisermet.com',
      ubicacionLabel: 'Ubicación',
      ubicacion: 'San Martín, Buenos Aires',
      instagramLabel: 'Instagram',
      instagramUser: '@lisermet',
      instagramUrl: 'https://www.instagram.com/lisermet/',
    },
  },

  footer: {
    copyright: '© 2026 Lisermet Metalúrgica. Todos los derechos reservados.',
    tagline: 'Fabricación de piezas a medida en chapa metálica.',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Trabajos', href: '#trabajos' },
      { label: 'Contacto', href: '#contacto' },
    ],
    social: {
      instagram: 'https://www.instagram.com/lisermet/',
      instagramLabel: 'Instagram de Lisermet',
    },
    logoAlt: 'Lisermet Metalúrgica',
  },
} as const;
