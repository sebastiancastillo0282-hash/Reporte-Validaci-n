
import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Quote, UserCircle2, ArrowRight } from 'lucide-react';
import { INTERVIEWS } from './constants';
import MethodologyMap from './components/MethodologyMap';
import Proposals from './components/Proposals';
import Analysis from './components/Analysis';
import BehavioralInsights from './components/BehavioralInsights';
import D3SentimentBubble from './components/D3SentimentBubble';
import { Section } from './types';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedInterview, setExpandedInterview] = useState<number | null>(null);

  const scrollTo = (id: Section) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">f</span>
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">finny</span>
              <span className="text-xs font-medium text-slate-400 ml-2 px-2 py-0.5 bg-slate-100 rounded-full border border-slate-200">Reporte B2B</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollTo(Section.METHODOLOGY)} className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">Metodología</button>
              <button onClick={() => scrollTo(Section.INTERVIEWS)} className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">Entrevistas</button>
              <button onClick={() => scrollTo(Section.ANALYSIS)} className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">Hallazgos</button>
              <button onClick={() => scrollTo(Section.BEHAVIOR)} className="text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors">Insights</button>
              <button onClick={() => scrollTo(Section.PROPOSALS)} className="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-full hover:bg-violet-700 transition-colors shadow-sm shadow-violet-200">Estrategia</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button onClick={() => scrollTo(Section.METHODOLOGY)} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md">Metodología</button>
              <button onClick={() => scrollTo(Section.INTERVIEWS)} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md">Entrevistas</button>
              <button onClick={() => scrollTo(Section.ANALYSIS)} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md">Hallazgos</button>
              <button onClick={() => scrollTo(Section.BEHAVIOR)} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md">Insights</button>
              <button onClick={() => scrollTo(Section.PROPOSALS)} className="block w-full text-left px-3 py-2 text-base font-medium text-violet-600 font-bold bg-violet-50 rounded-md">Estrategia</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id={Section.HERO} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Validación Completada (72h)
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            ¿Los empleados realmente <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">quieren</span> bienestar financiero?
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Antes de vender a empresas, salimos a la calle. Hablamos con empleados reales de MiniCooper, Aceros de Guatemala, Promerica y más. La respuesta no es la que esperábamos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => scrollTo(Section.ANALYSIS)} className="w-full sm:w-auto px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg shadow-lg shadow-violet-200 hover:bg-violet-700 hover:-translate-y-0.5 transition-all">
              Ver el Veredicto
            </button>
            <button onClick={() => scrollTo(Section.METHODOLOGY)} className="w-full sm:w-auto px-8 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all">
              Ver Metodología
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        
        {/* Methodology & Context Grid */}
        <section id={Section.METHODOLOGY} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">El Contexto</h2>
              <p className="text-slate-600 mb-4">
                Finny desarrolla una solución B2B para mejorar la salud financiera de los empleados. Necesitamos validar si el usuario final (el empleado) encuentra valor en ello antes de invertir recursos en ventas.
              </p>
              <div className="p-4 bg-violet-50 rounded-xl border border-violet-100">
                <h4 className="font-semibold text-violet-900 text-sm mb-2">Hipótesis a validar:</h4>
                <p className="text-violet-800 text-sm italic">"Los empleados corporativos valoran una app de educación financiera pagada por su empresa."</p>
              </div>
            </div>
          </div>
          <MethodologyMap />
        </section>

        {/* Interviews Section */}
        <section id={Section.INTERVIEWS}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">La Voz del Empleado</h2>
              <p className="text-slate-600 mt-2">6 conversaciones profundas, transcritas y analizadas.</p>
            </div>
            {/* Sentiment Chart Integration */}
             <div className="hidden md:block w-64 h-32 bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden">
                <D3SentimentBubble />
             </div>
          </div>

           {/* Mobile Sentiment Chart */}
           <div className="md:hidden w-full h-64 bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden mb-6">
                <D3SentimentBubble />
             </div>

          <div className="grid gap-4">
            {INTERVIEWS.map((interview) => (
              <div key={interview.id} className={`bg-white rounded-xl border transition-all duration-300 ${expandedInterview === interview.id ? 'ring-2 ring-violet-500 shadow-md' : 'border-slate-200 shadow-sm hover:border-violet-300'}`}>
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedInterview(expandedInterview === interview.id ? null : interview.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-slate-100 p-3 rounded-full">
                        <UserCircle2 className="w-6 h-6 text-slate-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{interview.name}</h3>
                        <p className="text-sm text-slate-500">{interview.role} @ <span className="font-medium text-slate-700">{interview.company}</span></p>
                      </div>
                    </div>
                    {expandedInterview === interview.id ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                  </div>
                  
                  <div className="mt-4 relative pl-4 border-l-4 border-violet-200">
                    <Quote className="absolute -top-2 -left-2 w-4 h-4 text-violet-300 fill-violet-100" />
                    <p className="text-slate-700 italic text-lg pr-4">"{interview.quote}"</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {interview.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">#{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedInterview === interview.id && (
                  <div className="px-6 pb-6 pt-0 border-t border-slate-100">
                     <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Insight Clave</h4>
                        <p className="text-sm font-medium text-slate-800">{interview.keyInsight}</p>
                     </div>
                     <div className="mt-6">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Transcripción Destacada</h4>
                        <div className="text-sm text-slate-600 space-y-2 whitespace-pre-line leading-relaxed">
                          {interview.fullTranscript}
                        </div>
                     </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Analysis Section */}
        <section id={Section.ANALYSIS} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">El Semáforo de Validación</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                La validación arroja una realidad mixta. El "Bienestar Financiero" por sí solo <strong className="text-red-500">NO</strong> es suficiente gancho debido a la pereza y el miedo a la privacidad.
                <br/><br/>
                Sin embargo, el interés se dispara cuando se pivota la oferta hacia <strong className="text-emerald-600">Productos Financieros</strong> (Consolidación) y <strong className="text-violet-600">Automatización</strong>.
              </p>
              <div className="p-6 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl text-white shadow-xl">
                <h3 className="font-bold text-xl mb-2">Veredicto</h3>
                <p className="opacity-90">El dolor existe, pero la solución debe ser <span className="font-bold border-b border-white/30">Cero Fricción</span> (Automática) y <span className="font-bold border-b border-white/30">Blindada</span> (Privacidad).</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Analysis />
          </div>
        </section>

        {/* Behavioral Insights Section */}
        <section id={Section.BEHAVIOR}>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Insights y Comportamiento del Usuario</h2>
            <p className="text-slate-600 mt-4">
              Más allá de las respuestas literales, analizamos el comportamiento detrás de las entrevistas. Identificamos 4 patrones clave que dictan la estrategia de adopción.
            </p>
          </div>
          <BehavioralInsights />
        </section>

        {/* Proposals Section */}
        <section id={Section.PROPOSALS} className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Estrategia de Producto: Del Feedback al Feature</h2>
            <p className="text-slate-600 mt-4">Basado en la validación de campo, el MVP de Finny debe pivotar para resolver tres fricciones críticas: la pereza manual, el miedo a RRHH y la falta de incentivos tangibles.</p>
          </div>
          <Proposals />
        </section>

      </main>
    </div>
  );
};

export default App;
