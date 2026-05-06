// Sección Contacto — formulario mailto + datos de contacto con íconos
import { useState } from 'react';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import type { ContactoFormData } from '../../../domain/models';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Button } from '../../components/Button/Button';
import { es } from '../../../l10n/es';
import styles from './Contacto.module.css';
import { MdWhatsapp } from "react-icons/md";

const EMPTY_FORM: ContactoFormData = { nombre: '', email: '', mensaje: '' };

export function Contacto() {
  const ref = useScrollAnimation<HTMLElement>();
  const [form, setForm] = useState<ContactoFormData>(EMPTY_FORM);
  const { sectionLabel, titulo, subtitulo, form: f, info } = es.contacto;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${form.nombre} — Lisermet`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\n\nMensaje:\n${form.mensaje}`,
    );
    window.location.href = `mailto:${info.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className={styles.section} ref={ref}>
      <div className={styles.container}>
        {/* Info col */}
        <div className={`${styles.infoCol} animate-on-scroll slide-left`}>
          <SectionTitle label={sectionLabel} title={titulo} light />
          <p className={styles.subtitulo}>{subtitulo}</p>

          <ul className={styles.infoList}>

            <li className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <MdWhatsapp size={22} />
              </span>

              <div>
                <span className={styles.infoLabel}>{info.whatsappLabel}</span>

                <a
                  href={`https://wa.me/${info.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoValue}
                >
                  {info.whatsappDisplay}
                </a>
              </div>
            </li>

            <li className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <MdOutlineEmail size={22} />
              </span>
              <div>
                <span className={styles.infoLabel}>{info.emailLabel}</span>
                <a href={`mailto:${info.email}`} className={styles.infoValue}>
                  {info.email}
                </a>
              </div>
            </li>

            <li className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <MdOutlineLocationOn size={22} />
              </span>
              <div>
                <span className={styles.infoLabel}>{info.ubicacionLabel}</span>
                <span className={styles.infoValue}>{info.ubicacion}</span>
              </div>
            </li>

            <li className={styles.infoItem}>
              <span className={styles.infoIcon}>
                <FaInstagram size={20} />
              </span>
              <div>
                <span className={styles.infoLabel}>{info.instagramLabel}</span>
                <a
                  href={info.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoValue}
                >
                  {info.instagramUser}
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Form col */}
        <form
          className={`${styles.form} animate-on-scroll slide-right`}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.field}>
            <label htmlFor="nombre" className={styles.label}>
              {f.nombre}
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder={f.nombrePlaceholder}
              value={form.nombre}
              onChange={handleChange}
              required
              className={styles.input}
              autoComplete="name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              {f.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={f.emailPlaceholder}
              value={form.email}
              onChange={handleChange}
              required
              className={styles.input}
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="mensaje" className={styles.label}>
              {f.mensaje}
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder={f.mensajePlaceholder}
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={5}
              className={styles.textarea}
            />
          </div>

          <Button type="submit" variant="primary">
            {f.enviar}
          </Button>
        </form>
      </div>
    </section>
  );
}
