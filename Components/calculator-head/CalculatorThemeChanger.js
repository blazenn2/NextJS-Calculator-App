import ThemeChange from './ThemeChange'

const CalculatorThemeChanger = () => {
    return (
        <div className='flex items-center'>
            <p className="text-[10px] text-text_white font-semibold pr-[30px] translate-y-[8px]">THEME</p>
            <ThemeChange />
        </div>
    )
}

export default CalculatorThemeChanger
