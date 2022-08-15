import { useCallback, useLayoutEffect, useEffect, useRef } from "react"
import Node from "./Node"
import * as d3 from "d3"

const lineNumbers = "line1-2"

const Region = () => {
  const regionRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useLayoutEffect(() => {
    const boundingRect = regionRef.current?.getBoundingClientRect()!
    const svgElement = d3
      .select("#" + lineNumbers)
      .attr("viewbox", `0 0 ${boundingRect.width} ${boundingRect.height}`)

    const arrow = svgElement.append("line")

    arrow
      .attr("stroke", "black")
      .attr("stroke-width", "5%")
      .attr("x1", 20 + 16)
      .attr("y1", 72)
      .attr("x2", 20 + 16)
      .attr("y2", 72 + 50)

    return () => {
      arrow.remove()
    }
  }, [])

  return (
    <div
      ref={regionRef}
      style={{
        position: "relative",
        display: "grid",
        placeContent: "center",
        background: "transparent",
      }}
    >
      <Node />
      <Node />

      <svg
        ref={svgRef}
        id={lineNumbers}
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <path d="L 100 100" stroke="black" />
      </svg>
    </div>
  )
}

export default Region
