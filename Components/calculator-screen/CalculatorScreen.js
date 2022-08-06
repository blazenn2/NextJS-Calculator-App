import { useSelector } from "react-redux"

const CalculatorScreen = () => {
    const firstValue = useSelector((state) => state.calculator.firstValue);
    const secondValue = useSelector((state) => state.calculator.secondValue);
    const operator = useSelector((state) => state.calculator.operator);
    const total = useSelector((state) => state.calculator.total);
    console.log(`First Val: ${firstValue} & Second Val: ${secondValue} & Total: ${total}`);
    return (
        <div className="w-[38%] h-[14.5%] flex items-center justify-end mt-[30px] bg-screenbg_blue rounded-lg">
            <p className="mr-[34px] text-[52px] text-text_white">{total === "" ? `${firstValue} ${operator === null ? '' : `${operator}`} ${secondValue}` : `${total}`}</p>
        </div>
    )
}

export default CalculatorScreen
