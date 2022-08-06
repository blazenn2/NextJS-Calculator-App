import CalculatorButton from './CalculatorButton';
import { useDispatch } from 'react-redux';
import { operator, deleteLastNumber, reset, calculate, decimalConversion } from '../../store/calculator-slice';

const CalculatorBody = () => {
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
        <div className="bg-keypadbg_blue mt-[25px] h-[55%] w-[38%] rounded-lg grid grid-cols-4 grid-rows-5 gap-4 p-[2rem]">
            {buttonArray.map((val, i) => <CalculatorButton key={i} index={i} value={val} />)}
            <button className="col-[4_/_5] row-[1_/_2] text-[30px] text-text_white bg-keybg_blue border-b-keyshadow_blue rounded-lg m-[5px] border-b-[5px]" onClick={extraHandler} value="del">DEL</button>
            <button className="col-[4_/_5] row-[2_/_3] text-[35px] text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 rounded-lg m-[5px] border-b-[5px]" value="+" onClick={operatorHandler}>+</button>
            <button className="col-[4_/_5] row-[3_/_4] text-[35px] text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 rounded-lg m-[5px] border-b-[5px]" value="-" onClick={operatorHandler}>-</button>
            <button className="col-[4_/_5] row-[4_/_5] text-[35px] text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 rounded-lg m-[5px] border-b-[5px]" value="*" onClick={operatorHandler}>x</button>
            <button className="col-[3_/_4] row-[4_/_5] text-[35px] text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 rounded-lg m-[5px] border-b-[5px]" value="/" onClick={operatorHandler}>/</button>
            <button className="col-[1_/_2] row-[4_/_5] text-[35px] text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 rounded-lg m-[5px] border-b-[5px]" value="." onClick={extraHandler}>.</button>
            <button className="col-[1_/_3] text-[30px] text-text_white bg-keybg_blue border-b-keyshadow_blue rounded-lg m-[5px] border-b-[5px]" onClick={extraHandler} value="res">RESET</button>
            <button className="col-[3_/_5] text-[30px] text-text_white bg-keybg_red border-b-keyshadow_red rounded-lg m-[5px] border-b-[5px]" onClick={extraHandler} value="=">=</button>
        </div>
    )
}

export default CalculatorBody
