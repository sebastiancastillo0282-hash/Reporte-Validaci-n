
import React from 'react';
import { Search, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { BEHAVIORAL_PATTERNS, STRATEGIC_CONCLUSION } from '../constants';

const BehavioralInsights: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BEHAVIORAL_PATTERNS.map((pattern) => (
          <div key={pattern.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-4">
               <div className="flex justify-between items-start mb-2">
                 <h3 className="font-bold text-lg text-slate-800 leading-snug">{pattern.title}</h3>
                 <span className="text-[10px] font-semibold bg-slate-100 text-slate-500 px-2 py-1 rounded-full whitespace-nowrap">
                   {pattern.caseStudy}
                 </span>
               </div>
            </div>

            <div className="space-y-4 flex-grow">
              {/* Finding */}
              <div className="bg-blue-50/50 p-3 rounded-lg border-l-2 border-blue-400">
                <div className="flex items-center gap-2 mb-1">
                  <Search className="w-3 h-3 text-blue-600" />
                  <span className="text-xs font-bold text-blue-700 uppercase">El Hallazgo</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{pattern.finding}</p>
              </div>

              {/* Insight */}
              <div className="bg-amber-50/50 p-3 rounded-lg border-l-2 border-amber-400">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-3 h-3 text-amber-600" />
                  <span className="text-xs font-bold text-amber-700 uppercase">El Insight</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{pattern.insight}</p>
              </div>

              {/* Strategy */}
              <div className="bg-emerald-50/50 p-3 rounded-lg border-l-2 border-emerald-400">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-3 h-3 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-700 uppercase">Estrategia</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{pattern.strategy}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Conclusion Footer */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
         
         <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-grow">
               <h4 className="text-violet-300 font-bold uppercase tracking-wider text-sm mb-2">Conclusión Estratégica</h4>
               <p className="text-lg md:text-xl font-medium leading-relaxed">
                 "{STRATEGIC_CONCLUSION.text}"
               </p>
            </div>
            <div className="shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
         </div>
      </div>
    </div>
  );
};

export default BehavioralInsights;
