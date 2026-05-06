// Interfaces TypeScript para las entidades del dominio de negocio

export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  imagenAlt: string;
}

export interface Trabajo {
  id: string;
  imagen: string;
  alt: string;
}

export interface Cliente {
  id: string;
  nombre: string;
  logo?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ValorEmpresa {
  titulo: string;
  descripcion: string;
}

export interface ContactoFormData {
  nombre: string;
  email: string;
  mensaje: string;
}
