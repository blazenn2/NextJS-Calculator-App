import ThemeChange from './ThemeChange'
import { useSelector } from "react-redux";

const CalculatorThemeChanger = () => {
    const theme = useSelector((state) => state.theme.showTheme);
    return (
        <div className='flex items-center'>
            <p className={`text-[12px] font-semibold pr-[30px] translate-y-[11px] ${theme === 0 ? 'text-text_white' : theme === 1 ? 'text-text_gray' : 'text-text_yellow'}`}>THEME</p>
            <ThemeChange />
        </div>
    )
}

export default CalculatorThemeChanger
