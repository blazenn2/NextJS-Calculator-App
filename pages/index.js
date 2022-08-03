import CalculatorHead from "../Components/calculator-head/CalculatorHead"
import CalculatorScreen from "../Components/calculator-screen/CalculatorScreen"
import CalculatorBody from "../Components/calculator-body/CalculatorBody"

export default function Home() {
  return (
    <div className="bg-bgmain_blue h-[56rem] w-[100vw] flex justify-center items-center flex-col">
      <CalculatorHead />
      <CalculatorScreen />
      <CalculatorBody />
    </div>
  )
}
