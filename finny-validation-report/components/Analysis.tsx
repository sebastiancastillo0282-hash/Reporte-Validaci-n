import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import { INSIGHTS } from '../constants';

const Analysis: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Green': return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'Yellow': return <AlertTriangle className="w-6 h-6 text-amber-500" />;
      case 'Red': return <XCircle className="w-6 h-6 text-red-500" />;
      default: return null;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'Green': return 'bg-emerald-50 border-emerald-100';
      case 'Yellow': return 'bg-amber-50 border-amber-100';
      case 'Red': return 'bg-red-50 border-red-100';
      default: return 'bg-white';
    }
  };

  return (
    <div className="space-y-4">
      {INSIGHTS.map((insight, idx) => (
        <div key={idx} className={`p-5 rounded-xl border ${getBgColor(insight.category)} transition-transform hover:-translate-y-1 duration-300`}>
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              {getIcon(insight.category)}
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-1">{insight.title}</h4>
              <p className="text-slate-600 text-sm mb-3">{insight.description}</p>
              <div className="space-y-1">
                {insight.evidence.map((ev, i) => (
                  <p key={i} className="text-xs text-slate-500 italic border-l-2 border-slate-300 pl-2">
                    "{ev}"
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analysis;