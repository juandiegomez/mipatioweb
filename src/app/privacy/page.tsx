import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen py-32 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-black transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 tracking-tight">
          Política de Privacidad y Tratamiento de Datos
        </h1>

        <div className="prose prose-lg prose-neutral max-w-none text-neutral-600">
          <p className="lead text-xl text-neutral-800 font-medium mb-8">
            En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia, 
            se informa a los usuarios del sitio web sobre la política de tratamiento de datos personales.
          </p>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">1. Responsable del Tratamiento</h3>
          <p>
            El responsable del tratamiento de sus datos personales es <strong>Juan Diego Gómez</strong> (en adelante, "El Responsable"), 
            domiciliado en Colombia. Puede contactarme a través del correo electrónico: 
            <a href="mailto:hola@juandiego.com" className="text-blue-600 hover:underline ml-1">hola@juandiego.com</a>.
          </p>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">2. Finalidad de la Recolección de Datos</h3>
          <p>
            Los datos personales recolectados a través de los formularios de contacto, suscripción o navegación en este sitio web 
            serán tratados con las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Establecer comunicación para responder a sus solicitudes, comentarios o propuestas de trabajo.</li>
            <li>Enviar información sobre servicios, actualizaciones del portafolio o contenido relevante (si se ha suscrito).</li>
            <li>Realizar análisis estadísticos de tráfico y comportamiento en el sitio web para mejorar la experiencia de usuario (Cookies).</li>
            <li>Cumplir con obligaciones legales y contractuales.</li>
          </ul>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">3. Derechos de los Titulares</h3>
          <p>
            Como titular de sus datos personales, usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente al Responsable.</li>
            <li><strong>Solicitar prueba</strong> de la autorización otorgada.</li>
            <li><strong>Ser informado</strong> sobre el uso que se le ha dado a sus datos personales.</li>
            <li><strong>Revocar la autorización</strong> y/o solicitar la supresión del dato cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
            <li><strong>Acceder en forma gratuita</strong> a sus datos personales que hayan sido objeto de Tratamiento.</li>
          </ul>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">4. Política de Cookies</h3>
          <p>
            Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y recopilar estadísticas anónimas. 
            Al continuar navegando, usted acepta el uso de estas tecnologías. Puede configurar su navegador para rechazar las cookies, 
            aunque esto podría afectar el funcionamiento de ciertas secciones del sitio.
          </p>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">5. Seguridad de la Información</h3>
          <p>
            El Responsable implementa las medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros 
            evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento. Sin embargo, la transmisión de información 
            a través de internet no es totalmente segura, por lo que no se puede garantizar la seguridad absoluta de los datos transmitidos.
          </p>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">6. Cambios en la Política</h3>
          <p>
            El Responsable se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. 
            Cualquier cambio será publicado en esta misma página y entrará en vigencia a partir de su publicación.
          </p>

          <p className="mt-12 text-sm text-neutral-400">
            Última actualización: Noviembre 2025
          </p>
        </div>
      </div>
    </main>
  );
}
