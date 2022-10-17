import { useEffect } from "react"
import generateCFG from "../lib/generateCFG"

interface CFGProps {
  code: string
}

const CFG = ({ code }: CFGProps) => {
  useEffect(() => {
    generateCFG(code)
  })

  return <div></div>
}

export default CFG
