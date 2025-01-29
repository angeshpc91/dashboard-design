import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const LineChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 280,
  });

  // useEffect for window resize
  useEffect(() => {
    // Set initial dimensions
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth - 10,
        height: 280,
      });
    }

    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth - 10,
          height: 280,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect for graph
  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const { width, height } = dimensions;
    const margin = { top: 20, right: 30, bottom: 40, left: 50 };

    const data = Array.from({ length: 60 }, (_, i) => ({
      x: i * 10, // Hours
      y: 2 + Math.pow(i / 10, 2), // Exponential growth
    }));

    // Set up scales
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.x) || 60])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y) || 10])
      .range([height - margin.bottom, margin.top]);

    // Line generator
    const line = d3
      .line<{ x: number; y: number }>()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y))
      .curve(d3.curveCatmullRom.alpha(0.5)); // Smooth curve

    // Select SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    svg.selectAll("*").remove(); // Clear previous elements

    // Axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(6)
          .tickFormat((d) => `${d} hours`)
      )
      .attr("color", "#aaa");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(
        d3
          .axisLeft(yScale)
          .ticks(5)
          .tickFormat((d) => `₹${d} lakhs`)
      )
      .attr("color", "#aaa");

    // Line path
    const path = svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#007bff")
      .attr("stroke-width", 2)
      .attr("d", line);

    // Animation
    const totalLength = path.node()?.getTotalLength() || 0;
    path
      .attr("stroke-dasharray", totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0);
  }, [dimensions]); // Dependency on dimensions

  return (
    <div ref={containerRef} style={{ width: "100%", margin: "auto" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default LineChart;
