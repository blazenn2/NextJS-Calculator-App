import CalculatorThemeChanger from './CalculatorThemeChanger';

const CalculatorHead = () => {
    return (
        <div className='w-[35%] flex justify-between items-center'>
            <h1 className="text-[28px] font-black text-text_white translate-y-[7px]">calc</h1>
            <CalculatorThemeChanger />
        </div>
    )
}

export default CalculatorHead
