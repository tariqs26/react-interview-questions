import CountryCapitalGame from "./questions/match-country-city/CountryCapitalGame"
import TrafficSignal from "./questions/traffic-signal/TrafficSignal"

export default function App() {
  const data = {
    Canada: "Ottawa",
    Germany: "Berlin",
  }

  return (
    <article className="app">
      <CountryCapitalGame data={data} />
      <TrafficSignal />
    </article>
  )
}
