import light from './light';
import dark from './dark';
import { useState } from 'react';

type ThemeName = 'light' | 'dark';

let setCurrentTheme: (theme: ThemeName) => void

export const useTheme = () => {
    const [current, setCurrent] = useState(localStorage.getItem('theme') as ThemeName || 'light');

    setCurrentTheme = (theme) => {
        localStorage.setItem('theme', theme);
        setCurrent(theme);
    }

    switch (current) {
        case 'dark':
            return dark;
        case 'light':
        default:
            return light;
    }
}

export const setTheme = (theme: ThemeName) => {
    setCurrentTheme && setCurrentTheme(theme)
};