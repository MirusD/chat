import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' ;

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('app-theme') as Theme;
        return saved || 'light';
    })

    useEffect(() => {
        const currentThemeClass = Array.from(document.documentElement.classList)
            .find(cls => cls.startsWith('theme-'));
        
        if (currentThemeClass) {
            document.documentElement.classList.replace(currentThemeClass, `theme-${theme}`);
        }
        else {
            document.documentElement.classList.add(`theme-${theme}`);
        }
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme должен использовать ThemeProvider'); 
    return ctx; 
}