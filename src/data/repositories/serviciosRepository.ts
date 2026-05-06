// Repositorio estático de servicios — retorna entidades del dominio sin lógica de presentación
import type { Servicio } from '../../domain/models';
import { es } from '../../l10n/es';

export function getServicios(): Servicio[] {
  return es.servicios.items.map((item) => ({
    id: item.id,
    titulo: item.titulo,
    descripcion: item.descripcion,
    imagen: item.imagen,
    imagenAlt: item.imagenAlt,
  }));
}
