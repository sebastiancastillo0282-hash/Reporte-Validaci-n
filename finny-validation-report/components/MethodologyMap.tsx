import React from 'react';
import { Navigation, Mic, Phone, Users, MapPin } from 'lucide-react';

const MethodologyMap: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full">
      <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <Navigation className="w-5 h-5 text-violet-600" />
        La Ruta de Validación
      </h3>

      {/* Intro Story */}
      <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm text-slate-700 space-y-3">
        <p>
          Cuando estaba empezando el reto, a quien llamé de primero que tenía más cercano fue a mi hermano. Pero luego de la llamada me di cuenta que <span className="font-semibold text-violet-700">mi círculo cercano no es el público objetivo de Finny</span>.
        </p>
        <p>
          Entonces bajé a la <span className="font-semibold">Avenida Las Américas</span> a caminar de 4:00 a 5:00 PM. Al principio me costó acercarme a la gente, pero la primera que entrevisté fue Maribi y me dio la entrevista con apertura mientras caminábamos a su parada de bus.
        </p>
        <p>
          Luego seguí caminando e iba entrevistando a los que veía que tenían <span className="font-semibold">camisa corporativa</span>. Solo una persona me rechazó la entrevista.
        </p>
      </div>

      {/* Stats Breakdown */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="flex flex-col items-center justify-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
          <Users className="w-5 h-5 text-emerald-600 mb-1" />
          <span className="text-xl font-bold text-slate-800">4</span>
          <span className="text-[10px] uppercase font-bold text-emerald-700 text-center">En la calle</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 bg-amber-50 rounded-lg border border-amber-100">
          <Mic className="w-5 h-5 text-amber-600 mb-1" />
          <span className="text-xl font-bold text-slate-800">1</span>
          <span className="text-[10px] uppercase font-bold text-amber-700 text-center">Voice Note</span>
        </div>
        <div className="flex flex-col items-center justify-center p-3 bg-blue-50 rounded-lg border border-blue-100">
          <Phone className="w-5 h-5 text-blue-600 mb-1" />
          <span className="text-xl font-bold text-slate-800">1</span>
          <span className="text-[10px] uppercase font-bold text-blue-700 text-center">Llamada</span>
        </div>
      </div>

      {/* Map Embed */}
      <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200 mb-4 bg-slate-100 relative shadow-inner">
        <iframe 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          allowFullScreen 
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?saddr=Plaza+Argentina,+Avenida+Las+Americas,+Guatemala&daddr=Edificio+Reforma+10,+Avenida+La+Reforma,+Guatemala&output=embed"
        >
        </iframe>
      </div>

      <div className="mt-auto bg-slate-50 p-3 rounded-lg text-sm text-slate-600 border border-slate-100 flex items-center gap-2">
        <MapPin className="w-4 h-4 text-violet-500" />
        <span>Ruta a pie: Plaza Argentina → Reforma 10</span>
      </div>
    </div>
  );
};

export default MethodologyMap;