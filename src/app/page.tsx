export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-neutral-50">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
          Status: En Construcción 🚀
        </div>
        
        <h1 className="text-6xl font-bold tracking-tight text-neutral-900">
          Bienvenido a <span className="text-blue-600">Mi Patio</span>
        </h1>
        
        <p className="text-xl text-neutral-600 leading-relaxed">
          Ideando algunas cosas.
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <button className="px-8 py-3 text-white bg-neutral-900 rounded-full hover:bg-neutral-700 transition-colors font-medium">
            Ver Proyectos
          </button>
          <button className="px-8 py-3 text-neutral-600 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors font-medium">
            Contactar
          </button>
        </div>
      </div>
    </main>
  );
}
