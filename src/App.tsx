import CountryCapitalGame from "@/questions/match-country-city/CountryCapitalGame"

export default function App() {
  const data = {
    Canada: "Ottawa",
    Germany: "Berlin",
  }

  return <CountryCapitalGame data={data} />
}
