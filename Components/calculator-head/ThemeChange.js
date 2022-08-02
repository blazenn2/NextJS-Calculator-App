import { useState } from "react"

const ThemeChange = () => {
    const [showTheme, setShowTheme] = useState(0);
    return (
        <div className="flex flex-col">
            <div className="flex justify-around w-[100%]">
                <p className="text-[13px] text-text_white font-semibold">1</p>
                <p className="text-[13px] text-text_white font-semibold">2</p>
                <p className="text-[13px] text-text_white font-semibold">3</p>
            </div>
            <div className="flex justify-between bg-screenbg_blue rounded-full p-[4px]">
                <button className={`w-[20px] h-[20px] ${showTheme === 0 ? 'bg-keybg_red' : ''} rounded-full`} onClick={() => setShowTheme(0)}></button>
                <button className={`w-[20px] h-[20px] ${showTheme === 1 ? 'bg-keybg_red' : ''} rounded-full`} onClick={() => setShowTheme(1)}></button>
                <button className={`w-[20px] h-[20px] ${showTheme === 2 ? 'bg-keybg_red' : ''} rounded-full`} onClick={() => setShowTheme(2)}></button>
            </div>
        </div>
    )
}

export default ThemeChange