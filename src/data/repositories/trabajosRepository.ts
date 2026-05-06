// Repositorio estático de trabajos realizados — retorna entidades del dominio
import type { Trabajo } from '../../domain/models';
import { es } from '../../l10n/es';

export function getTrabajos(): Trabajo[] {
  return es.trabajos.items.map((item) => ({
    id: item.id,
    imagen: item.imagen,
    alt: item.alt,
  }));
}
