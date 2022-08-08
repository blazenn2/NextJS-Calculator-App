import { useDispatch } from "react-redux"
import { firstValAppend, secondValAppend } from "../../store/calculator-slice";
import { useSelector } from "react-redux";

const CalculatorButton = ({ index, value }) => {
    const theme = useSelector((state) => state.theme.showTheme);
    const operator = useSelector((state) => state.calculator.operator);
    const dispatch = useDispatch();

    const clickHandler = (e) => {
        if (operator === null) dispatch(firstValAppend(e.target.value));
        else dispatch(secondValAppend(e.target.value));
    };

    return (
        <button className={`text-[35px] rounded-lg m-[5px] border-b-[5px] ${theme === 0 ? 'text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 active:bg-[#fff]' : theme === 1 ? 'text-text_gray bg-keybg_gray-1 border-b-keyshadow_gray-2 active:bg-[#fff]' : 'text-text_yellow bg-keybg_d-violet border-b-keyshadow_d-magenta active:bg-[#6b34ac]'} ms:h-[4rem] ms:text-[25px]`} value={value} onClick={clickHandler}>{value}</button>
    )
}

export default CalculatorButton
