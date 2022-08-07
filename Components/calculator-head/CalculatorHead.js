import CalculatorThemeChanger from './CalculatorThemeChanger';
import { useSelector } from "react-redux";

const CalculatorHead = () => {
    const theme = useSelector((state) => state.theme.showTheme);
    return (
        <div className='w-[38%] flex justify-between items-center h-[5%]'>
            <h1 className={`text-[30px] ml-[10px] font-black translate-y-[7px] ${theme === 0 ? 'text-text_white' : theme === 1 ? 'text-text_gray' : 'text-text_yellow'} `}>calc</h1>
            <CalculatorThemeChanger />
        </div>
    )
}

export default CalculatorHead
