const CalculatorButton = ({ index, value }) => {
    return (
        <button className={` ${index === 3 ? 'text-[30px] text-text_white bg-keybg_blue border-b-keyshadow_blue' : 'text-[35px] text-bgmain_blue bg-keybg_gray-1 border-b-keyshadow_gray-1'} rounded-lg m-[5px] border-b-[5px]`}>{value}</button>
    )
}

export default CalculatorButton
