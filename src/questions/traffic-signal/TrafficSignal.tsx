import { useState, useEffect } from "react"
import Styles from "./style.module.css"

const RED_DELAY = 2000
const YELLOW_DELAY = 1000
const GREEN_DELAY = 3000

type SignalState = "red" | "yellow" | "green"

export default function TrafficSignal() {
  const [signal, setSignal] = useState<SignalState>("green")

  useEffect(() => {
    switch (signal) {
      case "red":
        setTimeout(() => setSignal("green"), RED_DELAY)
        break
      case "yellow":
        setTimeout(() => setSignal("red"), YELLOW_DELAY)
        break
      default:
        setTimeout(() => setSignal("yellow"), GREEN_DELAY)
    }
  }, [signal])

  const getStyle = (light: SignalState) => ({
    backgroundColor: signal === light ? light : "black",
  })

  return (
    <section className={Styles.traffic__signal}>
      <div className={Styles.light} style={getStyle("red")} />
      <div className={Styles.light} style={getStyle("yellow")} />
      <div className={Styles.light} style={getStyle("green")} />
    </section>
  )
}
