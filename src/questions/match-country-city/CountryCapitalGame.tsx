import { useState } from "react"
import "./style.css"

type Props = {
  data: Record<string, string>
}

type Option = {
  value: string
  state: "selected" | "wrong" | ""
}

const randomize = () => Math.random() - 0.5

const getInitialState = (data: Props["data"]): Option[] =>
  [...Object.keys(data), ...Object.values(data)]
    .sort(randomize)
    .map((option) => ({ value: option, state: "" }))

export default function CountryCapitalGame({ data }: Props) {
  const [options, setOptions] = useState<Option[]>(getInitialState(data))
  const [pickedOption, setPickedOption] = useState<Option>()

  const handleOptionClick = (option: Option) => {
    if (!pickedOption) {
      setOptions(
        options.map((opt) => ({
          ...opt,
          state: opt.value === option.value ? "selected" : "",
        }))
      )
      setPickedOption(option)
      return
    }

    if (pickedOption.value === option.value) return

    const isPickedCountryMatch = data[pickedOption.value] === option.value
    const isPickedCityMatch = pickedOption.value === data[option.value]
    const validPair = isPickedCountryMatch || isPickedCityMatch

    const isOptionSelected = (opt: Option) =>
      opt.value === pickedOption.value || opt.value === option.value

    if (validPair) setOptions(options.filter((opt) => !isOptionSelected(opt)))
    else {
      setOptions(
        options.map((opt) => ({
          ...opt,
          state: isOptionSelected(opt) ? "wrong" : opt.state,
        }))
      )
    }
    setPickedOption(undefined)
  }

  if (!options.length) return <h1>Congratulations you won!</h1>

  return (
    <div className="game">
      <button onClick={() => setOptions(getInitialState(data))}>Reset</button>
      <div className="options">
        {options.map((option) => (
          <button
            key={option.value}
            className={option.state}
            onClick={() => handleOptionClick(option)}
          >
            {option.value}
          </button>
        ))}
      </div>
    </div>
  )
}
