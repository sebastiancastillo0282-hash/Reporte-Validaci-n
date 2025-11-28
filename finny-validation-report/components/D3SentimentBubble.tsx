import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { INTERVIEWS } from '../constants';

const D3SentimentBubble: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous render
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 600;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    const svg = d3.select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // X Axis: Privacy Concern (Low to High)
    const x = d3.scaleLinear()
      .domain([0, 10])
      .range([0, width - margin.left - margin.right]);

    // Y Axis: Interest in Product (Low to High)
    const y = d3.scaleLinear()
      .domain([0, 10])
      .range([height - margin.top - margin.bottom, 0]);

    // Color scale based on sentiment
    const color = d3.scaleOrdinal()
      .domain(["positive", "mixed", "neutral", "negative"])
      .range(["#10b981", "#f59e0b", "#64748b", "#ef4444"]);

    // Map data to coordinates (Qualitative assessment based on transcripts)
    const mappedData = INTERVIEWS.map(i => {
      let xVal = 5; // Default Privacy Concern
      let yVal = 5; // Default Interest

      if (i.name.includes("Susanna")) { xVal = 9; yVal = 4; } // High concern, Low interest (initially)
      if (i.name.includes("Rodrigo")) { xVal = 8; yVal = 6; } // High concern, Mid interest
      if (i.name.includes("Ricardo")) { xVal = 7; yVal = 8; } // Mid-High concern, High interest
      if (i.name.includes("Francisco")) { xVal = 3; yVal = 7; } // Low concern, Mid interest
      if (i.name.includes("Maribi")) { xVal = 4; yVal = 6; } // Mid concern, Mid interest
      if (i.name.includes("Abdel")) { xVal = 2; yVal = 9; } // Low concern, High interest (Techy)

      return { ...i, x: xVal, y: yVal };
    });

    // Add X axis
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(5).tickFormat(() => ""))
      .attr("class", "text-slate-400");

    // Add Y axis
    svg.append("g")
      .call(d3.axisLeft(y).ticks(5).tickFormat(() => ""))
      .attr("class", "text-slate-400");

    // Add Labels
    svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", width - margin.right)
      .attr("y", height - margin.top - margin.bottom - 5)
      .text("Preocupación por Privacidad →")
      .attr("class", "text-xs fill-slate-500 font-semibold");

    svg.append("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("y", 15)
      .attr("x", 0)
      .text("Interés en Solución →")
      .attr("class", "text-xs fill-slate-500 font-semibold");

    // Add Bubbles
    svg.append('g')
      .selectAll("circle")
      .data(mappedData)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.x))
      .attr("cy", d => y(d.y))
      .attr("r", 12)
      .style("fill", d => color(d.sentiment) as string)
      .style("opacity", 0.7)
      .style("stroke", "white")
      .style("stroke-width", 2);

    // Add Labels for bubbles
    svg.append('g')
      .selectAll("text")
      .data(mappedData)
      .enter()
      .append("text")
      .attr("x", d => x(d.x))
      .attr("y", d => y(d.y) - 15)
      .text(d => d.name.split(" ")[0])
      .attr("text-anchor", "middle")
      .attr("class", "text-[10px] fill-slate-600 font-medium");

  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h3 className="text-sm font-semibold text-slate-500 mb-2">Matriz de Interés vs. Fricción</h3>
      <div className="w-full h-64 md:h-80 relative">
        <svg ref={svgRef} className="w-full h-full overflow-visible"></svg>
      </div>
      <div className="flex gap-4 mt-2 text-xs text-slate-500">
        <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-emerald-500"></div> Positivo</span>
        <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-amber-500"></div> Mixto</span>
        <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-500"></div> Negativo</span>
      </div>
    </div>
  );
};

export default D3SentimentBubble;