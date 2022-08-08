import CalculatorHead from "../Components/calculator-head/CalculatorHead";
import CalculatorScreen from "../Components/calculator-screen/CalculatorScreen";
import CalculatorBody from "../Components/calculator-body/CalculatorBody";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.theme.showTheme);
  return (
    <div className={`${theme === 0 ? 'bg-bgmain_blue' : theme === 1 ? 'bg-bgmain_grey' : 'bg-bgmain_violet'} h-[56rem] w-[100vw] flex justify-center items-center flex-col`}>
      <CalculatorHead />
      <CalculatorScreen />
      <CalculatorBody />
    </div>
  )
}
