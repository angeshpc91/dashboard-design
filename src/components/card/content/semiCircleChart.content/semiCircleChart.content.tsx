import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { SemiCircleChartProps } from "./semiCircleChart.content.types";
import "./semiCircleChart.content.scss";

const SemiCircleChart: React.FC<SemiCircleChartProps> = ({
  orphanages,
  retirementHomes,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const [dimensions, setDimensions] = useState({ width: 410, height: 210 });

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const height = width * 0.6;
      setDimensions({ width, height });
    }

    // Handle Resize
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetWidth * 0.6,
        });
      }
    };

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // useEffect for graph
  useEffect(() => {
    if (!svgRef.current) return;

    const { width, height } = dimensions;
    const radius = Math.min(width, height - 35);
    const arcWidth = 30;
    const total = orphanages + retirementHomes;
    const orphanageAngle = (orphanages / total) * Math.PI;
    const retirementAngle = (retirementHomes / total) * Math.PI;

    const arc = d3
      .arc()
      .innerRadius(radius - arcWidth)
      .outerRadius(radius)
      .cornerRadius(arcWidth / 2)
      .startAngle(-Math.PI / 2);

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Append orphanage arc
    svg
      .append("path")
      .attr(
        "d",
        arc.endAngle(orphanageAngle - Math.PI / 2) as unknown as string
      )
      .attr("fill", hovered === "orphanage" ? "#FD7EE1" : "#FF66CC") // Pink
      .attr("transform", `translate(${width / 2},${height})`)
      .on("mouseover", () => setHovered("orphanage"))
      .on("mouseout", () => setHovered(null))
      .transition()
      .duration(300)
      .attr(
        "opacity",
        hovered === "orphanage" ? 1 : hovered === null ? 1 : 0.4
      );

    // Append retirement home arc
    svg
      .append("path")
      .attr(
        "d",
        arc
          .startAngle(orphanageAngle - Math.PI / 2)
          .endAngle(
            orphanageAngle + retirementAngle - Math.PI / 2
          ) as unknown as string
      )
      .attr("fill", hovered === "retirement" ? "#1F9D55" : "#2ECC71") // Green
      .attr("transform", `translate(${width / 2},${height})`)
      .on("mouseover", () => setHovered("retirement"))
      .on("mouseout", () => setHovered(null))
      .transition()
      .duration(300)
      .attr(
        "opacity",
        hovered === "retirement" ? 1 : hovered === null ? 1 : 0.4
      );
  }, [orphanages, retirementHomes, hovered, dimensions]);

  return (
    <div ref={containerRef}>
      <div className="semiCircleChartContainer">
        <p
          className="semiCircleChart"
          style={{
            opacity: hovered === "retirement" ? "0.4" : "1",
          }}
        >
          <span className="orphanagesColor">{orphanages}</span> orphanages
        </p>
        <p
          className="semiCircleChart"
          style={{
            opacity: hovered === "orphanage" ? 0.4 : 1,
          }}
        >
          <span className="retirementHomesColor">{retirementHomes}</span>{" "}
          retirement homes
        </p>
      </div>
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        style={{ position: "relative", bottom: "-10px" }}
      ></svg>
    </div>
  );
};

export default SemiCircleChart;
