// Página principal — ensambla todas las secciones de la landing en orden
import { Navbar } from '../sections/Navbar/Navbar';
import { Hero } from '../sections/Hero/Hero';
import { QuienesSomos } from '../sections/QuienesSomos/QuienesSomos';
import { Servicios } from '../sections/Servicios/Servicios';
import { Proceso } from '../sections/Proceso/Proceso';
import { Trabajos } from '../sections/Trabajos/Trabajos';
import { Clientes } from '../sections/Clientes/Clientes';
import { Contacto } from '../sections/Contacto/Contacto';
import { Footer } from '../sections/Footer/Footer';

export function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Servicios />
        <Proceso />
        <Trabajos />
        <Clientes />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
