import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'high-contrast';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: (newTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('app-theme') as Theme;
        return saved || 'light';
    })

    useEffect(() => {
        document.documentElement.className = '';
        document.documentElement.classList.add(`theme-$(theme)`);
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    const toggleTheme = (newTheme: Theme ) => {
        setTheme(newTheme);
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