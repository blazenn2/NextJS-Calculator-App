import CalculatorHead from "../Components/calculator-head/CalculatorHead"
import CalculatorScreen from "../Components/calculator-screen/CalculatorScreen"

export default function Home() {
  return (
    <div className="bg-bgmain_blue h-[60rem] w-[100vw] flex justify-center items-center flex-col">
      <CalculatorHead />
      <CalculatorScreen />
    </div>
  )
}
