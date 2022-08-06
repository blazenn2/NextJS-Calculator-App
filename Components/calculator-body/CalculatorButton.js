import { useDispatch } from "react-redux"
import { firstValAppend, secondValAppend } from "../../store/calculator-slice";
import { useSelector } from "react-redux";

const CalculatorButton = ({ index, value }) => {
    const operator = useSelector((state) => state.calculator.operator);
    console.log(operator);
    const dispatch = useDispatch();
    // const firstValue = useSelector((state) => state.calculator.firstValue);

    const clickHandler = (e) => {
        if (operator === null) dispatch(firstValAppend(e.target.value));
        else dispatch(secondValAppend(e.target.value));
    };

    return (
        <button className="text-[35px] text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1 rounded-lg m-[5px] border-b-[5px]" value={value} onClick={clickHandler}>{value}</button>
    )
}

export default CalculatorButton
