import { useCallback, useLayoutEffect, useEffect, useRef } from "react"
import Node from "./Node"
import * as d3 from "d3"

const lineNumbers = "line1-2"

const Region = () => {
  const regionRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useLayoutEffect(() => {
    const boundingRect = regionRef.current?.getBoundingClientRect()!
    const svgElement = d3.select("#" + lineNumbers)

    svgElement
      .attr("viewbox", `0 0 ${boundingRect.width} ${boundingRect.height}`)
      .append("line")
      .attr("stroke-width", "5%")
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
