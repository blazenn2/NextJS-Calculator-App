import CalculatorButton from './CalculatorButton';
import { useDispatch, useSelector } from 'react-redux';
import { operator, deleteLastNumber, reset, calculate, decimalConversion } from '../../store/calculator-slice';

const CalculatorBody = () => {
    const theme = useSelector((state) => state.theme.showTheme);
    const dispatch = useDispatch();
    const buttonArray = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
    const operatorHandler = (e) => {
        dispatch(operator(e.target.value));
    }
    const extraHandler = (e) => {
        if (e.target.value === "del") dispatch(deleteLastNumber());
        if (e.target.value === "res") dispatch(reset());
        if (e.target.value === "=") dispatch(calculate());
        if (e.target.value === ".") dispatch(decimalConversion());

    };
    return (
        <div className={`mt-[25px] h-[55%] w-[38%] rounded-lg grid grid-cols-4 grid-rows-5 gap-4 p-[2rem] ${theme === 0 ? 'bg-keypadbg_blue' : theme === 1 ? 'bg-screenbg_gray' : 'bg-keypadbg_violet'}`}>
            {buttonArray.map((val, i) => <CalculatorButton key={i} index={i} value={val} />)}
            <button className={`col-[4_/_5] row-[1_/_2] text-[30px] rounded-lg m-[5px] border-b-[5px] ${theme === 0 ? 'text-text_white bg-keybg_blue border-b-keyshadow_blue active:bg-[#b3bfe6]' : theme === 1 ? 'text-text_white bg-keybg_cyan border-b-keyshadow_cyan active:bg-[#80c5cb]' : 'text-text_white bg-keybg_violet border-b-keyshadow_magenta active:bg-[#8631b0]'}`} onClick={extraHandler} value="del">DEL</button>
            <button className={`col-[4_/_5] row-[2_/_3] text-[35px] rounded-lg m-[5px] border-b-[5px] ${theme === 0 ? 'text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 active:bg-[#fff]' : theme === 1 ? 'text-text_gray bg-keybg_gray-1 border-b-keyshadow_gray-2 active:bg-[#fff]' : 'text-text_yellow bg-keybg_d-violet border-b-keyshadow_d-magenta active:bg-[#6b34ac]'}`} value="+" onClick={operatorHandler}>+</button>
            <button className={`col-[4_/_5] row-[3_/_4] text-[35px] rounded-lg m-[5px] border-b-[5px] ${theme === 0 ? 'text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 active:bg-[#fff]' : theme === 1 ? 'text-text_gray bg-keybg_gray-1 border-b-keyshadow_gray-2 active:bg-[#fff]' : 'text-text_yellow bg-keybg_d-violet border-b-keyshadow_d-magenta active:bg-[#6b34ac]'}`} value="-" onClick={operatorHandler}>-</button>
            <button className={`col-[4_/_5] row-[4_/_5] text-[35px] rounded-lg m-[5px] border-b-[5px] ${theme === 0 ? 'text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 active:bg-[#fff]' : theme === 1 ? 'text-text_gray bg-keybg_gray-1 border-b-keyshadow_gray-2 active:bg-[#fff]' : 'text-text_yellow bg-keybg_d-violet border-b-keyshadow_d-magenta active:bg-[#6b34ac]'}`} value="*" onClick={operatorHandler}>x</button>
            <button className={`col-[3_/_4] row-[4_/_5] text-[35px] rounded-lg m-[5px] border-b-[5px] ${theme === 0 ? 'text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 active:bg-[#fff]' : theme === 1 ? 'text-text_gray bg-keybg_gray-1 border-b-keyshadow_gray-2 active:bg-[#fff]' : 'text-text_yellow bg-keybg_d-violet border-b-keyshadow_d-magenta active:bg-[#6b34ac]'}`} value="/" onClick={operatorHandler}>/</button>
            <button className={`col-[1_/_2] row-[4_/_5] text-[35px] rounded-lg m-[5px] border-b-[5px] ${theme === 0 ? 'text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 active:bg-[#fff]' : theme === 1 ? 'text-text_gray bg-keybg_gray-1 border-b-keyshadow_gray-2 active:bg-[#fff]' : 'text-text_yellow bg-keybg_d-violet border-b-keyshadow_d-magenta active:bg-[#6b34ac]'}`} value="." onClick={extraHandler}>.</button>
            <button className={`col-[1_/_3] text-[30px] rounded-lg m-[5px] border-b-[5px] ${theme === 0 ? 'text-text_white bg-keybg_blue border-b-keyshadow_blue active:bg-[#b3bfe6]' : theme === 1 ? 'text-text_white bg-keybg_cyan border-b-keyshadow_cyan active:bg-[#80c5cb]' : 'text-text_white bg-keybg_violet border-b-keyshadow_magenta active:bg-[#8631b0]'}`} onClick={extraHandler} value="res">RESET</button>
            <button className={`col-[3_/_5] text-[30px] rounded-lg m-[5px] border-b-[5px] ${theme === 0 ? 'text-text_white bg-keybg_red border-b-keyshadow_red active:bg-[#e8887d]' : theme === 1 ? 'text-text_white bg-keybg_orange border-b-keyshadow_orange active:bg-[#fd974e]' : 'text-text_d-blue bg-keybg_cyan2 border-b-keyshadow_cyan2 active:bg-[#94fff9]'}`} onClick={extraHandler} value="=">=</button>
        </div>
    )
}

export default CalculatorBody
