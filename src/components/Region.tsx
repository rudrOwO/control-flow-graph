import { useCallback, useLayoutEffect, useEffect, useRef } from "react"
import Node, { nodeDimension, nodeMargin } from "./Node"
import * as d3 from "d3"

const lineNumbers = "line1-2"

const Region = () => {
  const regionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const boundingRect = regionRef.current!.getBoundingClientRect()!
    const svgElement = d3
      .select("#" + lineNumbers)
      .attr("viewbox", `0 0 ${boundingRect.width} ${boundingRect.height}`)

    const arrow = svgElement.append("line")

    arrow
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .attr("x1", boundingRect.width / 2)
      .attr("y1", nodeDimension)
      .attr("x2", boundingRect.width / 2)
      .attr("y2", boundingRect.height - (nodeDimension + nodeMargin))

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
      <Node />
      <Node />
      <Node />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id={lineNumbers}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  )
}

export default Region
