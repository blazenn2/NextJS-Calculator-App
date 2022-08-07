import { useSelector } from "react-redux"

const CalculatorScreen = () => {
    const theme = useSelector((state) => state.theme.showTheme);
    const firstValue = useSelector((state) => state.calculator.firstValue);
    const secondValue = useSelector((state) => state.calculator.secondValue);
    const operator = useSelector((state) => state.calculator.operator);
    const total = useSelector((state) => state.calculator.total);
    return (
        <div className={`w-[38%] h-[14.5%] flex items-center justify-end mt-[30px] rounded-lg ${theme === 0 ? 'bg-screenbg_blue' : theme === 1 ? 'bg-[#ffffff99]' : 'bg-screenbg_violet'}`}>
            <p className={`mr-[34px] text-[52px] ${theme === 0 ? 'text-text_white' : theme === 1 ? 'text-text_gray' : 'text-text_yellow'}`}>{total === "" ? `${firstValue} ${operator === null ? '' : `${operator}`} ${secondValue}` : `${total}`}</p>
        </div>
    )
}

export default CalculatorScreen
