import CalculatorButton from './CalculatorButton'

const CalculatorBody = () => {
    const buttonArray = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x"];
    return (
        <div className="bg-keypadbg_blue mt-[25px] h-[55%] w-[38%] rounded-lg grid grid-cols-4 grid-rows-5 gap-4 p-[2rem]">
            {buttonArray.map((val, i) => <CalculatorButton key={i} index={i} value={val} />)}
            <button className="col-[1_/_3] text-[30px] text-text_white bg-keybg_blue border-b-keyshadow_blue rounded-lg m-[5px] border-b-[5px]">RESET</button>
            <button className="col-[3_/_5] text-[30px] text-text_white bg-keybg_red border-b-keyshadow_red rounded-lg m-[5px] border-b-[5px]">=</button>
        </div>
    )
}

export default CalculatorBody
