module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bgmain_blue': 'hsl(222, 26%, 31%)',
      'keypadbg_blue': 'hsl(223, 31%, 20%)',
      'screenbg_blue': 'hsl(224, 36%, 15%)',
      'keybg_blue': ' hsl(225, 21%, 49%)',
      'keyshadow_blue': 'hsl(224, 28%, 35%)',
      'keybg_red': 'hsl(6, 63%, 50%)',
      'keyshadow_red': 'hsl(6, 70%, 34%)',
      'keybg_gray-1': 'hsl(30, 25%, 89%)',
      'keyshadow_gray-1': 'hsl(28, 16%, 65%)',
      'text_blue': 'hsl(221, 14%, 31%)',
      'text_white': 'hsl(0, 0%, 100%)',
      'bgmain_grey': 'hsl(0, 0%, 90%)',
      'keypadbg_grayred': 'hsl(0, 5%, 81%)',
      'screenbg_gray': 'hsl(0, 0%, 93%)',
      'keybg_cyan': 'hsl(185, 42%, 37%)',
      'keyshadow_cyan': 'hsl(185, 58%, 25%)',
      'keybg_orange': 'hsl(25, 98%, 40%)',
      'keyshadow_orange': 'hsl(25, 99%, 27%)',
      'keybg_gray-2': 'hsl(45, 7%, 89%)',
      'keyshadow_gray-2': 'hsl(35, 11%, 61%)',
      'text_gray': 'hsl(60, 10%, 19%)',
      'bgmain_violet': 'hsl(268, 75%, 9%)',
      'keypadbg_violet': 'hsl(268, 71%, 12%)',
      'screenbg_violet': 'hsl(268, 71%, 12%)',
      'keybg_violet': 'hsl(281, 89%, 26%)',
      'keyshadow_magenta': 'hsl(285, 91%, 52%)',
      'keybg_cyan2': 'hsl(176, 100%, 44%)',
      'keyshadow_cyan2': 'hsl(177, 92%, 70%)',
      'keybg_d-violet': 'hsl(268, 47%, 21%)',
      'keyshadow_d-magenta': 'hsl(290, 70%, 36%)',
      'text_yellow': 'hsl(52, 100%, 62%)',
      'text_d-blue': 'hsl(198, 20%, 13%)',
    },
    fontFamily: {
      league: ['League Spartan', 'sans-serif']
    },
    extend: {
      screens: {
        'ms': { 'max': '375px' },
        'ls': { 'min': '1440px' }
      },
    },
  },
  plugins: [],
}