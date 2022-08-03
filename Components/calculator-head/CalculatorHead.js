import CalculatorThemeChanger from './CalculatorThemeChanger';

const CalculatorHead = () => {
    return (
        <div className='w-[38%] flex justify-between items-center h-[5%]'>
            <h1 className="text-[30px] ml-[10px] font-black text-text_white translate-y-[7px]">calc</h1>
            <CalculatorThemeChanger />
        </div>
    )
}

export default CalculatorHead
