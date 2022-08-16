export const nodeMargin = 40
export const nodeDimension = 60

const Node = () => {
  return (
    <div
      style={{
        width: nodeDimension,
        height: nodeDimension,
        margin: nodeMargin,
        marginTop: 0,
        borderRadius: "50%",
        background: "#007add",
        aspectRatio: "1",
        display: "grid",
        placeContent: "center",
        color: "#eeeeee",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: 16,
        fontWeight: "bold",
        zIndex: 2,
      }}
    >
      1-2
    </div>
  )
}

export default Node
