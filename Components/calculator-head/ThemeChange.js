import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/theme-slice";

const ThemeChange = () => {
    const showTheme = useSelector((state) => state.theme.showTheme);
    const theme = useSelector((state) => state.theme.showTheme);
    const dispatch = useDispatch();
    const themeChanger = (e) => {
        dispatch(changeTheme(Number(e.target.value)));
    };
    let buttonColor = '';
    if (theme === 0) buttonColor = "bg-keybg_red";
    else if (theme === 1) buttonColor = "bg-keybg_orange";
    else buttonColor = "bg-keybg_cyan2";
    return (
        <div className="flex flex-col">
            <div className="flex justify-around w-[100%]">
                <p className={`text-[13px] font-semibold ${theme === 0 ? 'text-text_white' : theme === 1 ? 'text-text_gray' : 'text-text_yellow'}`}>1</p>
                <p className={`text-[13px] font-semibold ${theme === 0 ? 'text-text_white' : theme === 1 ? 'text-text_gray' : 'text-text_yellow'}`}>2</p>
                <p className={`text-[13px] font-semibold ${theme === 0 ? 'text-text_white' : theme === 1 ? 'text-text_gray' : 'text-text_yellow'}`}>3</p>
            </div>
            <div className={`flex justify-between rounded-full p-[4px] ${theme === 0 ? 'bg-screenbg_blue' : theme === 1 ? 'bg-screenbg_gray' : 'bg-screenbg_violet'}`}>
                <button className={`w-[20px] h-[20px] ${showTheme === 0 ? buttonColor : ''} rounded-full active:bg-[#e8887d] `} value="0" onClick={themeChanger}></button>
                <button className={`w-[20px] h-[20px] ${showTheme === 1 ? buttonColor : ''} rounded-full active:bg-[#feb581] `} value="1" onClick={themeChanger}></button>
                <button className={`w-[20px] h-[20px] ${showTheme === 2 ? buttonColor : ''} rounded-full active:bg-keyshadow_cyan2 `} value="2" onClick={themeChanger}></button>
            </div>
        </div>
    )
}

export default ThemeChange