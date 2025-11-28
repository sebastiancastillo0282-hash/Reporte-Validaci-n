import React from 'react';
import { ShieldCheck, Camera, Percent, ArrowRight, Quote } from 'lucide-react';
import { PROPOSALS } from '../constants';

const Icons: Record<string, React.ReactNode> = {
  shield: <ShieldCheck className="w-6 h-6 text-white" />,
  camera: <Camera className="w-6 h-6 text-white" />,
  percent: <Percent className="w-6 h-6 text-white" />,
};

const Proposals: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {PROPOSALS.map((proposal) => (
        <div key={proposal.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col relative">
          <div className="h-2 w-full bg-violet-600 group-hover:bg-violet-700 transition-colors"></div>
          
          <div className="p-6 flex-1 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-200 shrink-0">
                {Icons[proposal.icon]}
              </div>
              <h4 className="font-bold text-xl text-slate-800 leading-tight">{proposal.title}</h4>
            </div>
            
            <div className="space-y-6 flex-1">
              {/* Problem */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">El Problema</span>
                <p className="text-sm text-slate-600 font-medium">{proposal.problem}</p>
              </div>

              {/* Evidence */}
              <div className="bg-slate-50 rounded-lg p-3 border border-slate-100">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 flex items-center gap-1">
                    <Quote className="w-3 h-3" /> La Evidencia
                 </span>
                 <div className="space-y-2">
                    {proposal.evidence.map((ev, idx) => (
                        <p key={idx} className="text-xs text-slate-500 italic border-l-2 border-violet-200 pl-2 leading-relaxed">
                            {ev}
                        </p>
                    ))}
                 </div>
              </div>

              {/* Solution */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">La Solución</span>
                <p className="text-sm text-slate-900 font-semibold">{proposal.solution}</p>
              </div>

               {/* Impact */}
               <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Impacto B2B</span>
                <p className="text-sm text-slate-700">{proposal.impact}</p>
              </div>
            </div>

            {/* Feature Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between group-hover:px-2 transition-all duration-300">
              <div>
                <span className="text-[10px] font-semibold text-violet-400 uppercase">MVP Feature</span>
                <p className="text-violet-900 font-bold text-sm">{proposal.feature}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                <ArrowRight className="w-4 h-4 text-violet-600" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proposals;