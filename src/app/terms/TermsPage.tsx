import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
          Términos y Condiciones
        </h1>

        <div className="prose prose-lg prose-neutral max-w-none text-neutral-600">
          <p className="lead text-xl text-neutral-800 font-medium mb-8">
            Bienvenido a mi portafolio profesional. Al acceder y utilizar este sitio web, usted acepta cumplir con los siguientes 
            Términos y Condiciones de uso, los cuales, junto con nuestra Política de Privacidad, rigen la relación entre usted y 
            Juan Diego Gómez en relación con este sitio web.
          </p>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">1. Propiedad Intelectual</h3>
          <p>
            Todo el contenido de este sitio web, incluyendo pero no limitado a diseños, logotipos, textos, gráficos, imágenes, 
            código fuente, software y proyectos mostrados (en adelante, el "Contenido"), es propiedad exclusiva de <strong>Juan Diego Gómez</strong> 
            o de terceros que han autorizado su uso.
          </p>
          <p className="mt-4">
            Está estrictamente prohibida la reproducción, distribución, modificación, exhibición pública o cualquier otro uso 
            comercial o no comercial del Contenido sin la autorización previa y por escrito del titular. El uso no autorizado 
            puede dar lugar a reclamaciones por daños y perjuicios y/o constituir un delito.
          </p>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">2. Uso del Sitio Web</h3>
          <p>
            El usuario se compromete a utilizar el sitio web únicamente con fines lícitos y de manera que no infrinja los derechos 
            de, restrinja o inhiba el uso y disfrute del sitio web por parte de cualquier tercero.
          </p>
          <p className="mt-4">
            Queda prohibido:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Utilizar el sitio para transmitir material ilegal, amenazante, difamatorio u ofensivo.</li>
            <li>Intentar acceder sin autorización a sistemas informáticos o redes conectadas al sitio.</li>
            <li>Utilizar el sitio para distribuir malware, virus o cualquier otro código informático dañino.</li>
          </ul>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">3. Limitación de Responsabilidad</h3>
          <p>
            El contenido de este sitio web se proporciona "tal cual" y "según disponibilidad". Aunque me esfuerzo por mantener 
            la información actualizada y correcta, no garantizo la exactitud, integridad o actualidad del contenido.
          </p>
          <p className="mt-4">
            No seré responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad 
            de uso de este sitio web, incluyendo la pérdida de datos o beneficios.
          </p>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">4. Enlaces a Terceros</h3>
          <p>
            Este sitio web puede contener enlaces a sitios web de terceros (por ejemplo, LinkedIn, GitHub, proyectos de clientes). 
            Estos enlaces se proporcionan únicamente para su conveniencia. No tengo control sobre el contenido de esos sitios 
            y no asumo responsabilidad alguna por ellos ni por cualquier pérdida o daño que pueda surgir de su uso.
          </p>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">5. Modificaciones</h3>
          <p>
            Me reservo el derecho de revisar y modificar estos Términos y Condiciones en cualquier momento sin previo aviso. 
            Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos Términos y Condiciones.
          </p>

          <h3 className="text-2xl font-bold text-black mt-12 mb-4">6. Ley Aplicable y Jurisdicción</h3>
          <p>
            Estos términos se regirán e interpretarán de acuerdo con las leyes de la República de Colombia. Cualquier disputa 
            relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Colombia.
          </p>

          <p className="mt-12 text-sm text-neutral-400">
            Última actualización: Noviembre 2025
          </p>
        </div>
      </div>
    </main>
  );
}
